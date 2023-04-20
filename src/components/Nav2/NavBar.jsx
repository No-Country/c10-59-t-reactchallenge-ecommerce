import carticon from "../../assets/iconos/cart-icon.svg";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <Nav2 />
      <h2>BIRRA</h2>
      <Link to="/cart">
        <img className="cart__icon" src={carticon} alt="Carrito" />
      </Link>
    </div>
  );
};

export default NavBar;
