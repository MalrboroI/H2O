import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`${"sidebar"} ${isOpen ? "open" : ""}`}>
        <div className="logo">Аналитика</div>
        <ul className="menu">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${"menuItem"} ${isActive ? "active" : ""}`
              }
            >
              📊 Дашборд
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `${"menuItem"} ${isActive ? "active" : ""}`
              }
            >
              📄 Отчёты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${"menuItem"} ${isActive ? "active" : ""}`
              }
            >
              ⚙️ Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className={"toggleButton"}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? "✕" : "☰"}
      </button>
    </>
  );
};

export default Sidebar;
