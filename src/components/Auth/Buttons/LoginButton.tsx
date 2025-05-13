import { useAuth } from "../AuthProvider";
import "./LoginButton.scss";

export const LoginButton = () => {
  const { login } = useAuth();

  return (
    <button onClick={login} className="login-button">
      Войти
    </button>
  );
};
