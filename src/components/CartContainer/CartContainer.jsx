import "./CartContainer.css";
import { useState } from "react";
import { CartItem } from "../CartItem/CartItem";

export const CartContainer = () => {
    const [cartList, setCartList] = useState([{}]);

    return(
        <div className="cart-container">
            {cartList.length > 0 ?
                cartList.map((item) => <CartItem key={item.id}/>) :
                <p>No tienes productos</p>
            }
        </div>
    );
}
