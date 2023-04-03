import "./CartItem.css";
import { CartItemCounter } from "../CartItemCounter/CartItemCounter";
import Img from "../../assets/Img/images (2).jpg"

export const CartItem = () => {
  return (
    <div className="cart-item-container">
        <img src={Img} alt="#" />
        <div className="cart-item-desc">
            <p>ITEM</p>
            <CartItemCounter/>
        </div>
        <div className="cart-item-total">
            <p>Total</p>
            <p>$1500</p>
        </div>
    </div>
  );
}
