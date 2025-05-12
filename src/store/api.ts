// import axios from "axios";
import { FinancialDataItem } from "../globalTypes/types";
import { generateMockData } from "../utils/generateMockData";

// const API_BASE_URL = "https://api.example.com/reports";

export const fetchReportData = async (): Promise<FinancialDataItem[]> => {
  try {
    // В реальном приложении здесь был бы реальный API вызов
    // const response = await axios.get(`${API_BASE_URL}/data`);
    // return response.data;

    // Для демонстрации используем моковые данные
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateMockData(50));
      }, 1000);
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Failed to fetch report data");
  }
};
