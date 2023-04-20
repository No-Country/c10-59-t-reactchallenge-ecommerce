import "./CartContainer.css";
import CartItem from "../CartItem/CartItem";
import NavSection from "../../NavSection/NavSection";
import { useSelector } from "react-redux";
import CartNav from "../CartNav/CartNav";

const CartContainer = () => {
  const { cartList } = useSelector((state) => state.Cart);

  return (
    <>
      <NavSection title="Carrito" />
      <div className="cart-container">{cartList?.length > 0 ? cartList.map((product) => <CartItem key={product.id} product={product} />) : <p>No tienes productos</p>}</div>
      <CartNav isCart={true} />
    </>
  );
};

export default CartContainer;
