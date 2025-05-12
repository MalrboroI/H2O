import React, { ReactNode } from "react";
// import Chart from "../Chart/FinancialChart";
// import ProblemAreas from "../../components/ProblemAreas/ProblemAreas";
// import SummaryCards from "../../components/SummaryCard/SummaryCards";
import "./Dashboard.scss";

interface DashboardProps {
  authRequired: boolean;
  onAuthRequest: () => void;
  children?: ReactNode;
}

const Dashboard = ({ authRequired, onAuthRequest }: DashboardProps) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (authRequired && !isAuthenticated) {
    return (
      <div className="authOverlay">
        <div className="authPrompt">
          <h3>Требуется авторизация</h3>
          <p>Для доступа к этой функции войдите в систему</p>
          <button onClick={onAuthRequest}>Войти</button>
        </div>

        {/* Заглушка для демонстрации */}
        <div className="placeholder">
          <h2>Демо-дашборд</h2>
          <p>Аналитика</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Аналитическая панель</h1>
      {/* Реальный контент для авторизованных пользователей */}
      {isAuthenticated ? (
        <div>Приветствую, администратор!</div>
      ) : (
        <div className="demoWarning">
          Это пет-проект
        </div>
      )}
    </div>
  );
};

export default Dashboard;
