import React, { useState } from "react";
// import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useAuth } from "../../Auth/AuthProvider";
import "./AuthModal.scss";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await login({ username, password });
    if (success) {
      onClose();
    } else {
      setError("Неверные учетные данные");
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button className="closeButton" onClick={onClose}>
          ×
        </button>
        <h2>Вход в систему</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
