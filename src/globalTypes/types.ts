// Тип денежной операции
export type MoneyOperationType =
  | "expenses" // затраты
  | "income" // прибыль
  | "revenue" // выручка
  | "debt"; // задолженность

export interface ChartProps {
  activeTab: TimeRange;
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

// Интерфейс для элемента финансовых данных
export interface FinancialDataItem {
  id: string; // Уникальный идентификатор
  division: string; // Подразделение (B2B, B2C и т.д.)
  date: string; // Дата в ISO формате
  amount: number; // Сумма (лучше использовать number вместо string)
  type: MoneyOperationType; // Тип операции
  category?: string; // Опциональная категория
  description?: string; // Опциональное описание
}

// Интерфейс для проблемной зоны
export interface ProblemArea {
  id: string; // Униальный идентификатор
  name: string; // Название зоны
  amount: number; // Сумма
}

// Состояние отчета
export interface ReportState {
  financialData: FinancialDataItem[]; // Суммы по дате
  problemAreas: ProblemArea[]; // Проблемные зоны
  loading: boolean; // Состояние загрузки
  error: string | null; // Ошибка
  activeTab: "week" | "month" | "year"; // Ваыбор периода по таблице
}

export interface HeaderProps {
  title: string;
  children?: React.ReactNode; // Добавляем children как опциональное свойство
}

// Типы для фильтрации данных
export type TimeRange = "week" | "month" | "year";
export type DivisionFilter = "all" | "B2B" | "B2C";
