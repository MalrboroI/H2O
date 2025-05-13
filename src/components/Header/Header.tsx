import React from "react";
import { useAuth } from "../Auth/AuthProvider";
import { LoginButton } from "../Auth/Buttons/LoginButton";
import { LogoutButton } from "../Auth/Buttons/LogoutButton";
import "./Header.scss";

export const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="header">
      <h1 className="title">Сводный отчёт</h1>
      <div className="actions">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
};
