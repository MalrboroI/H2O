import { useAuth0 } from "@auth0/auth0-react";
import "./LogoutButton.scss";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logoutButton"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Выйти
    </button>
  );
};

export default LogoutButton;
