import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/StoreProvider";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./FinancialChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC = observer(() => {
  const { reportStore } = useStore();

  if (reportStore.isLoading)
    return <div className="loading">Загрузка данных...</div>;
  if (!reportStore.chartData)
    return <div className="loading">Ошибка загрузки</div>;

  return (
    <div className="chartContainer">
      <div className="chartWrapper">
        <Line
          data={reportStore.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true, // при false все слетает
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxWidth: 12,
                  padding: 20,
                  font: {
                    size: 12,
                  },
                },
              },
              title: {
                display: true,
                text: `График по ${
                  reportStore.activeDivision === "all"
                    ? "всем подразделениям"
                    : reportStore.activeDivision
                }`,
                font: {
                  size: 14,
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  maxRotation: 45,
                  minRotation: 45,
                  font: {
                    size: 10,
                  },
                },
              },
              y: {
                ticks: {
                  callback: (value) => `${value} ₽`,
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
});

export default Chart;
