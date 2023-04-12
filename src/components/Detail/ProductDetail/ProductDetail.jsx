import { CartItemCounter } from "../Cart/CartItemCounter/CartItemCounter";
import { Button } from "react-bootstrap";

const ProductDetail = ({product}) => {

 return (
    <>
        <h2>{product.name}</h2>
        <div className="descripcion">         
            <p className="texto-descripcion">{product.description}</p>
            <img src={product.img} alt="#"/>
            <div className="desc-detalle">
                <p>Detalles</p>
            </div>
            <div className="desc-precio">
                <p>Precio:</p>
                <p>{product.price}</p>
            </div>
            <div>
                <CartItemCounter />
            </div>
            <div>
                <Button className="desc-compra">
                    Comprar
                </Button>
            </div>
        </div>
    </>
  );
 }
export default ProductDetail;
