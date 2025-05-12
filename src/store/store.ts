import { ReportStore } from "./reportStore";

export class RootStore {
  reportStore: ReportStore;

  constructor() {
    this.reportStore = new ReportStore();
  }
}

// Экспортируем экземпляр хранилища
export const rootStore = new RootStore();

// Экспортируем тип RootStore для использования в компонентах
export type TRootStore = RootStore;
