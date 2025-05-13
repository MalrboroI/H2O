import React from "react";
import { observer } from "mobx-react-lite";
import ReportStore from "../store/ReportStore";
import Chart from "../components/Chart/FinancialChart";
import ProblemAreas from "../components/ProblemAreas/ProblemAreas";
import SummaryCard from "../components/SummaryCard/SummaryCard";
import PeriodTabs from "../components/PeriodTabs/PeriodTabs";
import "./Dashboard.scss";

interface DashboardProps {
  reportStore: ReportStore;
}

const Dashboard: React.FC<DashboardProps> = observer(({ reportStore }) => {
  return (
    <div className="dashboard">
      <div className="summarySection">
        <SummaryCard
          title="Итоги"
          value="10 157 764"
          percentage={215}
          trend="up"
        />
        <SummaryCard
          title="В28"
          value="8 615 253"
          percentage={43.7}
          trend="up"
        />
        <SummaryCard
          title="В2С"
          value="1 542 511"
          percentage={12.3}
          trend="down"
        />
      </div>

      <div className="generalStats">
        <div className="statItem">
          <span>Выручка</span>
          <strong>P 8 615 253</strong>
        </div>
        <div className="statItem">
          <span>Прибыль</span>
          <strong>P 5 342 876</strong>
        </div>
        <div className="statItem">
          <span>Заказы</span>
          <strong>1 245</strong>
        </div>
      </div>

      <PeriodTabs
        activeTab={reportStore.activeTab}
        onChange={(tab) => reportStore.setActiveTab(tab)}
      />

      <Chart activeTab={reportStore.activeTab} />

      <div className="statsGrid">
        <ProblemAreas />
        <div className="statCard">
          <h3>Конверсия</h3>
          <div className="statValue">12.4%</div>
        </div>
      </div>
    </div>
  );
});

export default Dashboard;
