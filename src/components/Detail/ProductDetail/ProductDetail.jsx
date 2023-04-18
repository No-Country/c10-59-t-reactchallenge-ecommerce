import { CartItemCounter } from "../../Cart/CartItemCounter/CartItemCounter";
import "./ProductDetail.css";
import NavSection from "../../NavSection/NavSection";

const ProductDetail = ({ product }) => {

 return (
    <>
        <NavSection title={product.name} category={product.category}/>
        <div className="product-detail-container">
            <div className={`product-name detail-${product.category}`}>
                <h2>{product.flavor}</h2>
            </div>
            <div className="descripcion-container">
                <div className="texto-descripcion">
                    <p>{product.description}</p>
                </div>
                <div className="product-image">
                    <img src={product.img} alt="#"/>
                </div>
            </div>
            <div className="desc-recomendacion">
                <h3 className={`detail-${product.category}`}>Para disfrutar con:</h3>
                <p className="texto-recomendacion">{product.recommendation}</p>
            </div>
        </div>
        <div className="desc-compra">
            <CartItemCounter/>
            <button className="desc-btn-add">{`AGREGAR $${product.price}`}</button>
        </div>
    </>
  );

}
export default ProductDetail;
