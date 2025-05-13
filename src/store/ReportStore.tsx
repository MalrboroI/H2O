import { makeAutoObservable } from "mobx";

class ReportStore {
  activeTab: "week" | "month" | "year" = "week";
  error: string | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: "week" | "month" | "year") {
    this.activeTab = tab;
  }
}

export default ReportStore;
