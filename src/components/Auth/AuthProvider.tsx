import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: {
    username: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверка существующей сессии при загрузке
    const token = localStorage.getItem("auth_token");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = async (credentials: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      // Замените на реальный API-запрос
      if (
        credentials.username === "admin" &&
        credentials.password === "admin123"
      ) {
        localStorage.setItem("auth_token", "mock_token");
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
