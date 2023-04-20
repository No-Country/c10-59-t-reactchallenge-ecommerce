import "../Pedidos/Pedidos.css";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../store/slices/cartList.slice";
import { Link } from "react-router-dom";
import NavSection from "../NavSection/NavSection";

const Pedidos = () => {
  const total = useSelector(getTotalPrice);

  const { cartList } = useSelector((state) => state.Cart);

  return (
    <>
      <NavSection title="Pedido" />
      <div className="pedidos__container">
        <div className="input">
          <h2 className="input__title">Direcion de entrega</h2>
          <input type="text" placeholder="Dirección de entrega" />
        </div>
        <div className="input">
          <h2 className="input__title">Horario estimado</h2>
          <input type="tel" placeholder="Horario" />
        </div>
        <div className="input">
          <h2 className="input__title">Metodo de pago</h2>
          <input type="text" placeholder="Metodo de pago" />
        </div>
        <div className="pedidos__detalles">
          <h2 className="pedidos__detalles-title">Detalle</h2>
          <div className="line" />
          <div className="detalles--map">

        {
          cartList?.map(cartproduct => (
            <div className="detalle--span">
            <span className="detalles__span"><span>{cartproduct.quantity}</span>{cartproduct.name}</span>
            
          </div>
          ))
        }
          </div>
          
          <div className="line" />
          <div className="total">
            <span className="total__title">Total</span>
            <span className="total__monto">${total}</span>
          </div>
        </div>
        <Link to="/credit">
          <button className="pedidos__btn">PEDIR</button>
        </Link>{" "}
      </div>
    </>
  );
};

export default Pedidos;
