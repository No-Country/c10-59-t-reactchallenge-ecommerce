import "./CartItemCounter.css";

export const CartItemCounter = ({ counter, setCounter }) => {
   
  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    if(!(counter === 1)) {
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
