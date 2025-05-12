import {
  FinancialDataItem,
  MoneyOperationType,
  ProblemArea,
} from "../globalTypes/types";

const divisions = ["B2B", "B2C", "B28"];
const types: MoneyOperationType[] = ["expenses", "income", "revenue", "debt"];
const categories = [
  "Marketing",
  "Sales",
  "Operations",
  "Development",
  "Support",
];
const generateId = (): string => Math.random().toString(36);

export const generateMockData = (count: number): FinancialDataItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: generateId(),
    division: divisions[Math.floor(Math.random() * divisions.length)],
    date: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    amount: Math.floor(Math.random() * 1000000) + 500000, // number
    type: types[Math.floor(Math.random() * types.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    description: `Transaction ${index + 1}`,
  }));
};
export const generateProblemAreas = (): Omit<ProblemArea, "id">[] =>
  [
    { id: generateId(), name: "Лечебный персонал", amount: 3003670 },
    {
      id: generateId(),
      name: "Подразделение разовых работ ФОТ",
      amount: 901470,
    },
    { id: generateId(), name: "Вставь (единенье)", amount: 278325 },
    { id: generateId(), name: "Закупка инвентаря", amount: 44742 },
    { id: generateId(), name: "Закупка стандартиды/CIG", amount: 16810 },
    { id: generateId(), name: "Рецепт оборудования", amount: 28570 },
    { id: generateId(), name: "Обслуживание автомобиля", amount: 47868 },
    { id: generateId(), name: "Форс-мажоры", amount: 13750 },
    { id: generateId(), name: "Рекламные бюджеты (Бютеры)", amount: 101500 },
    { id: generateId(), name: "Рекламные бюджеты (Контекст)", amount: 200000 },
  ].map((area) => ({
    ...area,
    amount: Number(area.amount), // Проверка на number
  }));
