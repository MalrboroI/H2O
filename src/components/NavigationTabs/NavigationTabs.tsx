import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/Hooks/useStore";
import "./NavigationTabs.scss";

const NavigationTabs: React.FC = observer(() => {
  const { reportStore } = useStore();

  return (
    <div className="tabs">
      <button
        className={`${"tabs__button"} ${
          reportStore.activeTab === "week" ? "tabs__button_active" : ""
        }`}
        onClick={() => reportStore.setActiveTab("week")}
      >
        Неделя
      </button>
      <button
        className={`${"tabs__button"} ${
          reportStore.activeTab === "month" ? "tabs__button_active" : ""
        }`}
        onClick={() => reportStore.setActiveTab("month")}
      >
        Месяц
      </button>
      <button
        className={`${"tabs__button"} ${
          reportStore.activeTab === "year" ? "tabs__button_active" : ""
        }`}
        onClick={() => reportStore.setActiveTab("year")}
      >
        Год
      </button>
    </div>
  );
});

export default NavigationTabs;
