import "./CartNav.css";
import { Link } from "react-router-dom";
import { getTotalPrice } from "../../../store/slices/cartList.slice";
import { useSelector } from "react-redux";

const CartNav = ({ isCart }) => {
  const { cartList } = useSelector((state) => state.Cart);

  const total = useSelector(getTotalPrice);

  const length = cartList.length;

  if (cartList?.length > 0) {
    return (
      <div className="cart-nav-container">
        <div className="cart-nav-total">
          <span>{`${length} ${length > 1 ? "productos" : "producto"}`}</span>
          <span>${total}</span>
        </div>
        <button className="cart-nav-btn">
          <Link to={isCart ? "/pedidos" : "/cart"}>{isCart ? "COMPRAR" : "IR AL CARRITO"}</Link>
        </button>
      </div>
    );
  }
};

export default CartNav;
