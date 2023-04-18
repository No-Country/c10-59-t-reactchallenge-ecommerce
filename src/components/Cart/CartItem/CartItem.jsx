import "./CartItem.css";
import { CartItemCounter } from "../CartItemCounter/CartItemCounter";
import redCross from "../../../assets/iconos/icon-red-cross.svg"

export const CartItem = () => {
  return (
    <div className="cart-item-container">
        <div className="cart-item-desc">
            <p>Rabieta IPA</p>
            <hr />
            <div>
              <CartItemCounter/>
            </div>
        </div>
        <div className="cart-item-total">
            <p>Total</p>
            <p>$1500</p>
        </div>
        <img src={redCross} alt="" />
    </div>
  );
}
