import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "./store/Hooks/useStore";
import { useAuth } from "./components/Auth/AuthProvider";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import Chart from "./components/Chart/FinancialChart";
import ProblemAreas from "./components/ProblemAreas/ProblemAreas";
import AuthModal from "./components/Auth/Modal/AuthModal";
import Home from "./components/Home/Home";
// import Dashboard from "./components/ProblemAreas/Dashboard";
// import ErrorMessage from "./components/UI/ErrorMessage";
import "./globalStyles/App.scss";

const App: React.FC = observer(() => {
  const { reportStore } = useStore();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  // const [activeTab, setActiveTab] = useState<TimeRange>("week");

  if (authLoading) return "Загрузка...";
  if (reportStore.error) return "Ошибка";

  return (
    <div className="app">
      <Navbar onLoginClick={() => setShowAuthModal(true)} />

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardContent reportStore={reportStore} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
});

const DashboardContent: React.FC<{ reportStore: any }> = observer(
  ({ reportStore }) => (
    <>
      <Header title="Сводный отчет" />
      <div className="content">
        <div className="summarySection">
          <SummaryCard title="Итоги" value="10 157 764" percentage={215} />
          <SummaryCard title="В28" value="8 615 253" percentage={43.7} />
          <SummaryCard title="В2С" value="-1 542 511" />
        </div>

        <Chart activeTab={reportStore.activeTab} />

        <div className="statsGrid">
          <StatItem label="Выручка" value="9 615 253" />
          <StatItem label="Закрыты" value="10 157 764" />
          <StatItem label="Прибыль" value="-1 542 511" />
          <StatItem label="Задолжность" value="0" />
          <StatItem label="Итог" value="10 157 764" />
        </div>

        <ProblemAreas />
      </div>
    </>
  )
);

const StatItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="statItem">
    <span className="statLabel">{label}</span>
    <span className="statValue">{value}</span>
  </div>
);

export default App;
