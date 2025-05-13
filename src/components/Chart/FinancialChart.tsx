import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, type ChartOptions } from "chart.js/auto";
import { TimeRange, ChartProps } from "../../globalTypes/types";
import "./FinancialChart.scss";

const FinancialChart: React.FC<ChartProps> = ({ activeTab }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS<"line"> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Уничтожаем предыдущий график
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Генерируем данные в зависимости от активного таба
    const { labels, datasets } = generateChartData(activeTab);

    chartInstance.current = new ChartJS(ctx, {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: getChartOptions(),
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [activeTab]);

  // Функция генерации данных
  const generateChartData = (range: TimeRange) => {
    const labels = getLabelsForRange(range);
    return {
      labels,
      datasets: [
        {
          label: "Выручка",
          data: labels.map(() => Math.random() * 1000000),
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.1)",
        },
        {
          label: "Прибыль",
          data: labels.map(() => Math.random() * 500000 - 100000),
          borderColor: "#2ecc71",
          backgroundColor: "rgba(46, 204, 113, 0.1)",
        },
      ],
    };
  };

  // Функция получения подписей для диапазона
  const getLabelsForRange = (range: TimeRange): string[] => {
    switch (range) {
      case "week":
        return ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
      case "month":
        return ["Неделя 1", "Неделя 2", "Неделя 3", "Неделя 4"];
      case "year":
        return [
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
    }
  };

  // Настройки графика
  const getChartOptions = (): ChartOptions<"line"> => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) label += ": ";
            label +=
              new Intl.NumberFormat("ru-RU").format(context.raw as number) +
              " ₽";
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) =>
            new Intl.NumberFormat("ru-RU").format(Number(value)) + " ₽",
        },
      },
    },
  });

  return (
    <div className="chartContainer">
      <canvas ref={chartRef} />
    </div>
  );
};

export default FinancialChart;
