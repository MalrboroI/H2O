import { useAuth } from "../AuthProvider";
import "./LoginButton.scss";

export const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="logout-button">
      Выйти
    </button>
  );
};
