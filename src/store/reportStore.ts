import { makeAutoObservable, runInAction } from "mobx";
import {
  generateMockData,
  generateProblemAreas,
} from "../utils/generateMockData";
import {
  FinancialDataItem,
  ProblemArea,
  MoneyOperationType,
  TimeRange,
} from "../globalTypes/types";

export class ReportStore {
  financialData: FinancialDataItem[] = [];
  problemAreas: ProblemArea[] = [];
  loading = false;
  error: string | null = null;
  // activeTab: TimeRange = "week";
  activeTab: "week" | "month" | "year" = "week";

  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  async loadData() {
    this.loading = true;
    this.error = null;

    try {
      // Имитация асинхр API запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData = generateMockData(50).map((item) => ({
        ...item,
        id: Math.random().toString(36).substr(2, 9),
        amount: Number(item.amount),
      }));

      const problemAreas = generateProblemAreas().map((area) => ({
        ...area,
        id: Math.random().toString(36).substr(2, 9),
      }));

      runInAction(() => {
        this.financialData = mockData;
        this.problemAreas = problemAreas;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : "Failed to load data";
        this.loading = false;
      });
    }
  }
  

  setActiveTab(tab: TimeRange) {
    this.activeTab = tab;
  }

  // Дополнительные методы для работы с данными
  getTotalByType(type: MoneyOperationType): number {
    return this.financialData
      .filter((item) => item.type === type)
      .reduce((sum, item) => sum + item.amount, 0);
  }
}
