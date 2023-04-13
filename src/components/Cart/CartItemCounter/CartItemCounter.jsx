import "./CartItemCounter.css";
import { useState } from "react";

export const CartItemCounter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    if(!(counter === 0)) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="cart-counter-container">
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}
