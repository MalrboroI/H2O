import { makeAutoObservable } from "mobx";
import { FinancialDataItem, ProblemArea } from "../globalTypes/types";
import {
  generateMockData,
  generateProblemAreas,
  filterByPeriod,
} from "../utils/generateMockData";

type Tab = "week" | "month" | "year";
type Division = "all" | "B2B" | "B2C";

class ReportStore {
  activeTab: Tab = "week";
  activeDivision: Division = "all";
  financialData: FinancialDataItem[] = [];
  problemAreas: ProblemArea[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  async loadData() {
    this.isLoading = true;
    try {
      this.financialData = generateMockData(500);
      this.problemAreas = generateProblemAreas();
    } finally {
      this.isLoading = false;
    }
  }

  setActiveTab(tab: Tab) {
    this.activeTab = tab;
  }

  setActiveDivision(division: Division) {
    this.activeDivision = division;
  }

  get filteredData() {
    const filtered = filterByPeriod(this.financialData, this.activeTab);
    return this.activeDivision === "all"
      ? filtered
      : filtered.filter((item) => item.division === this.activeDivision);
  }

  get incomeData() {
    return this.filteredData.filter((item) => item.type === "income");
  }

  get expensesData() {
    return this.filteredData.filter((item) => item.type === "expenses");
  }

  get revenueData() {
    return this.filteredData.filter((item) => item.type === "revenue");
  }

  get summary() {
    const income = this.incomeData.reduce((sum, item) => sum + item.amount, 0);
    const expenses = this.expensesData.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const revenue = this.revenueData.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    const profit = income - expenses;

    return {
      total: revenue,
      b2b: this.incomeData
        .filter((item) => item.division === "B2B")
        .reduce((sum, item) => sum + item.amount, 0),
      b2c: this.incomeData
        .filter((item) => item.division === "B2C")
        .reduce((sum, item) => sum + item.amount, 0),
      income,
      expenses,
      profit,
      debt: this.filteredData
        .filter((item) => item.type === "debt")
        .reduce((sum, item) => sum + item.amount, 0),
    };
  }

  get generalStats() {
    const { income, expenses, profit, debt } = this.summary;
    return {
      income,
      expenses,
      profit,
      debt,
      total: income + profit,
    };
  }

  get chartData() {
    const labels =
      this.activeTab === "week"
        ? ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
        : this.activeTab === "month"
        ? Array.from({ length: 30 }, (_, i) => (i + 1).toString())
        : [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек",
          ];

          

    const generateRandomData = (min: number, max: number) =>
      labels.map(() => Math.floor(Math.random() * (max - min) + min));

    if (this.activeDivision === "all") {
      return {
        labels,
        datasets: [
          {
            label: "B2B",
            data: generateRandomData(500000, 2000000),
            borderColor: "#3498db",
            backgroundColor: "rgba(52, 152, 219, 0.2)",
          },
          {
            label: "B2C",
            data: generateRandomData(200000, 1000000),
            borderColor: "#e74c3c",
            backgroundColor: "rgba(231, 76, 60, 0.2)",
          },
        ],
      };
    }

    return {
      labels,
      datasets: [
        {
          label: this.activeDivision,
          data: generateRandomData(
            this.activeDivision === "B2B" ? 500000 : 200000,
            this.activeDivision === "B2B" ? 2000000 : 1000000
          ),
          borderColor: this.activeDivision === "B2B" ? "#3498db" : "#e74c3c",
          backgroundColor:
            this.activeDivision === "B2B"
              ? "rgba(52, 152, 219, 0.2)"
              : "rgba(231, 76, 60, 0.2)",
        },
      ],
    };
  }
}

export default ReportStore;
