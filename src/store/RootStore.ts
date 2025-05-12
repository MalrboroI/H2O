import { makeAutoObservable } from "mobx";
import { ReportStore } from "./reportStore";

class RootStore {
  reportStore: ReportStore;

  constructor() {
    makeAutoObservable(this);
    this.reportStore = new ReportStore();
  }
}

export default RootStore;
