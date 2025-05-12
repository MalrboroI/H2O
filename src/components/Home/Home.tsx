import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/dashboard"); // Перенаправление с последующим запросом авторизации
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h1 className="title">Финансовая аналитика вашего бизнеса</h1>
        <p className="subtitle">
          Полный контроль над финансовыми показателями в реальном времени
        </p>
        <button onClick={handleGetStarted} className="ctaButton">
          Начать анализ
        </button>
      </div>

      <div className="features">
        <div className="featureCard">
          <div className="featureIcon">📊</div>
          <h3>Сводные отчеты</h3>
          <p>Полная визуализация ключевых показателей эффективности</p>
        </div>

        <div className="featureCard">
          <div className="featureIcon">🔍</div>
          <h3>Проблемные зоны</h3>
          <p>Автоматическое выявление узких мест в финансах</p>
        </div>

        <div className="featureCard">
          <div className="featureIcon">📈</div>
          <h3>Прогнозирование</h3>
          <p>Точные прогнозы на основе исторических данных</p>
        </div>
      </div>

      {!isAuthenticated && (
        <div className="authNote">
          <p>Для доступа ко всем функциям требуется авторизация</p>
        </div>
      )}
    </div>
  );
};

export default Home;
