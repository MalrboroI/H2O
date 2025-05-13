import {
  FinancialDataItem,
  MoneyOperationType,
  ProblemArea,
} from "../globalTypes/types";

const divisions = ["B2B", "B2C"] as const;
const types: MoneyOperationType[] = ["expenses", "income", "revenue", "debt"];
const categories = [
  "Marketing",
  "Sales",
  "Operations",
  "Development",
  "Support",
];

const generateId = (): string => Math.random().toString(36);

// Генерация сумм рандомная
export const generateMockData = (count: number): FinancialDataItem[] => {
  return Array.from({ length: count }, (_, index) => {
    const division = divisions[Math.floor(Math.random() * divisions.length)];
    const type = types[Math.floor(Math.random() * types.length)];

    // Генерация данных с разными диапазонами для B2B и B2C
    const baseAmount =
      division === "B2B"
        ? Math.floor(Math.random() * 5000000) + 1000000
        : Math.floor(Math.random() * 2000000) + 500000;

    // Корректировка суммы в зависимости от типа операции
    const amount =
      type === "expenses"
        ? -Math.abs(baseAmount * 0.7)
        : type === "debt"
        ? -Math.abs(baseAmount * 0.3)
        : baseAmount;

    return {
      id: generateId(),
      division,
      date: new Date(
        Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
      amount,
      type,
      category: categories[Math.floor(Math.random() * categories.length)],
      description: `Transaction ${index + 1}`,
    };
  });
};

export const generateProblemAreas = (): ProblemArea[] => [
  { id: generateId(), name: "Линейный персонал", amount: 3003670 },
  { id: generateId(), name: "Подразделение разовых работ ФОТ", amount: 901470 },
  { id: generateId(), name: "Бензин (наличные)", amount: 278325 },
  { id: generateId(), name: "Закупка инвентаря", amount: 44742 },
  { id: generateId(), name: "Закупка стандартиды/СИЗ", amount: 16810 },
  { id: generateId(), name: "Ремонт оборудования", amount: 28570 },
  { id: generateId(), name: "Обслуживание автомобиля", amount: 47868 },
  { id: generateId(), name: "Форс-мажоры", amount: 13750 },
  { id: generateId(), name: "Рекламные бюджеты (Блогеры)", amount: 101500 },
  { id: generateId(), name: "Рекламные бюджеты (Контекст)", amount: 200000 },
];

// Группировка данных по подразделениям и типам
export const getAggregatedData = (data: FinancialDataItem[]) => {
  return data.reduce((acc, item) => {
    const key = `${item.division}_${item.type}`;
    if (!acc[key]) {
      acc[key] = { division: item.division, type: item.type, amount: 0 };
    }
    acc[key].amount += item.amount;
    return acc;
  }, {} as Record<string, { division: string; type: string; amount: number }>);
};

// Фильтрация данных по периоду
export const filterByPeriod = (
  data: FinancialDataItem[],
  period: "week" | "month" | "year"
) => {
  const now = new Date();
  let fromDate: Date;

  if (period === "week") {
    fromDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  } else if (period === "month") {
    fromDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
  } else {
    fromDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  }

  return data.filter((item) => new Date(item.date) >= fromDate);
};
