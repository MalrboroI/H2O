import React from "react";
import "./PeriodTabs.scss";

interface PeriodTabsProps {
  activeTab: "week" | "month" | "year";
  onChange: (tab: "week" | "month" | "year") => void;
}

const PeriodTabs: React.FC<PeriodTabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="tabs">
      {(["week", "month", "year"] as const).map((tab) => (
        <button
          key={tab}
          className={`${"tab"} ${activeTab === tab ? "active" : ""}`}
          onClick={() => onChange(tab)}
        >
          {tab === "week" ? "Неделя" : tab === "month" ? "Месяц" : "Год"}
        </button>
      ))}
    </div>
  );
};

export default PeriodTabs;
