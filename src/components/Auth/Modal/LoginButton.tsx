import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.scss";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="loginButton" onClick={() => loginWithRedirect()}>
      Войти
    </button>
  );
};

export default LoginButton;
