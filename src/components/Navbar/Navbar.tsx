import React from "react";
// import { FiHome, FiPieChart, FiSettings } from "react-icons/fi";
// import LogoutButton from "../Auth/Modal/LogoutButton";
import "./Navbar.scss";

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <nav className="navbar">
      <div className="logo">Аналитика</div>
      <div className="actions">
        {isAuthenticated ? (
          <button 
            onClick={() => {
              localStorage.removeItem('isAuthenticated');
              window.location.reload();
            }}
            className="logoutButton"
          >
            Выйти
          </button>
        ) : (
          <button onClick={onLoginClick} className="loginButton">
            Войти
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;