import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/StoreProvider";
// import ReportStore from "../store/ReportStore";
import Chart from "../components/Chart/FinancialChart";
import ProblemAreas from "../components/ProblemAreas/ProblemAreas";
import SummaryCard from "../components/SummaryCard/SummaryCard";
import PeriodTabs from "../components/PeriodTabs/PeriodTabs";
import "./Dashboard.scss";

const Dashboard: React.FC = observer(() => {
  const { reportStore } = useStore();
  const { total, b2b, b2c } = reportStore.summary;
  const { income, expenses, profit, debt } = reportStore.generalStats;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("ru-RU").format(Math.round(num));
  };

  return (
    <div className="dashboard">
      <div className="mainContent">
        <div className="summarySection">
          <SummaryCard
            title="Итоги"
            value={formatNumber(total).replace(" ₽", "")}
            percentage={Math.round((total / (b2b + b2c)) * 100 - 100)}
            trend={total >= b2b + b2c ? "up" : "down"}
            active={reportStore.activeDivision === "all"}
            onClick={() => reportStore.setActiveDivision("all")}
          />
          <SummaryCard
            title="B2B"
            value={formatNumber(b2b).replace(" ₽", "")}
            percentage={Math.round((b2b / (b2b + b2c)) * 100)}
            trend="up"
            active={reportStore.activeDivision === "B2B"}
            onClick={() => reportStore.setActiveDivision("B2B")}
          />
          <SummaryCard
            title="B2C"
            value={formatNumber(b2c).replace(" ₽", "")}
            percentage={Math.round((b2c / (b2b + b2c)) * 100)}
            trend={b2c > 0 ? "up" : "down"}
            active={reportStore.activeDivision === "B2C"}
            onClick={() => reportStore.setActiveDivision("B2C")}
          />
        </div>

        <div className="chartContainer">
          <div className="periodTabs">
            <PeriodTabs
              activeTab={reportStore.activeTab}
              onChange={(tab) => reportStore.setActiveTab(tab)}
            />
          </div>
          <Chart />
        </div>

        <div className="generalStats">
          <div className="statsRow">
            <div className="statItem">
              <span>Выручка</span>
              <strong>{formatNumber(income)}</strong>
            </div>
            <div className="statItem">
              <span>Затраты</span>
              <strong>{formatNumber(expenses)}</strong>
            </div>
            <div className="statItem">
              <span>Прибыль</span>
              <strong>{formatNumber(profit)}</strong>
            </div>
            <div className="statItem">
              <span>Задолженность</span>
              <strong>{formatNumber(debt)}</strong>
            </div>
            <div className="statItem">
              <span>Итог</span>
              <strong>{formatNumber(income + profit)}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="problemAreasContainer">
        <ProblemAreas problemAreas={reportStore.problemAreas} />
      </div>
    </div>
  );
});

export default Dashboard;
