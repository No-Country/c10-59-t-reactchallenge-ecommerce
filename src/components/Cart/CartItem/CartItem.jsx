import "./CartItem.css";
import { CartItemCounter } from "../CartItemCounter/CartItemCounter";
import redCross from "../../../assets/iconos/icon-red-cross.svg"
import { deleteProduct } from "../../../store/slices/cartList.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
        <div className="cart-item-desc">
            <p>{product.name}</p>
            <hr />
            <div>
              <p>Cantidad: <span>{product.quantity}</span></p>
            </div>
        </div>
        <div className="cart-item-total">
            <p>Total</p>
            <p>${product.price * product.quantity}</p>
        </div>
        <img src={redCross} onClick={() => dispatch(deleteProduct(product))} alt="detele" />
    </div>
  );
}
