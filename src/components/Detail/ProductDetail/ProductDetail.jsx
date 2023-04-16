import { CartItemCounter } from "../../Cart/CartItemCounter/CartItemCounter";
import { Button } from "react-bootstrap";
import "./ProductDetail.css";

const ProductDetail = ({product}) => {

 return (
    <>
        <h2>{product.name}</h2>
        <div className="descripcion">         
            <p className="texto-descripcion">{product.description}</p>
            <img src={product.img} alt="#"/>
            <div className="desc-recomendacion">
                <h3>Para disfrutar con:</h3>
                <p className="texto-recomendacion">{product.recommendation}</p>
            </div>
            <div className="counter">
                <CartItemCounter />
            </div>
            <div>
                <Button className="desc-compra">
                    Agregar
                    <p>{product.price}</p>
                </Button>
            </div>
        </div>
    </>
  );
 }
export default ProductDetail;
