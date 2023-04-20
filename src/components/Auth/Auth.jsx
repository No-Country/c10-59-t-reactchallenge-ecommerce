import { Link } from "react-router-dom";

import NavSection from "../NavSection/NavSection";
import AuthGoogle from "./AuthGoogle";

const Auth = () => {
  return (
    <div className="auth__container">
      <h2 className="auth__title">Acceso a cuenta</h2>
      <div className="auth__links">
        <Link to="/login">
          <button>INICIAR SESIÓN</button>
        </Link>
        <Link to="/register">
          <button>REGISTRARSE</button>
        </Link>
      </div>

      <div className="division">
        <span className="line"></span>
        <span className="O">O</span>
        <span className="line"></span>
      </div>
      <AuthGoogle />
    </div>
  );
};
export default Auth;
