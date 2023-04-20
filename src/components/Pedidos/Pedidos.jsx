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
          <input type="text" value="Buenos aires" placeholder="Dirección de entrega" />
        </div>
        <div className="input">
          <h2 className="input__title">Horario estimado</h2>
          <input type="tel" value="13:00 pm" placeholder="Horario" />
        </div>
        <div className="input">
          <h2 className="input__title">Metodo de pago</h2>
         

<select 
name="Pagos" 
id="pago-select" 
className="pedidos-select"
>
    <option value="">--Elija una opción--</option>
    <option value="perro">Visa</option>
    <option value="gato">Zelle</option>
    <option value="hamster">Paypal</option>
    <option value="conejo">Mercado Pago</option>
    <option value="caballo">Binance</option>
    <option value="vaca">Zinli</option>

</select>
        </div>
        <div className="pedidos__detalles">
          <h2 className="pedidos__detalles-title">Detalle</h2>
          <div className="line" />
          <div className="detalles--map">

        {
          cartList?.map(cartproduct => (
            <div className="detalle--span">
            <span className="detalles__span">{cartproduct.name}</span>
            <span className="total__span-detalles">Cantidad: {cartproduct.quantity}</span>
            
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
