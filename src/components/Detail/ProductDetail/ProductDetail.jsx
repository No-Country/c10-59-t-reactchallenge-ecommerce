import { CartItemCounter } from "../../Cart/CartItemCounter/CartItemCounter";
import "./ProductDetail.css";
import NavSection from "../../NavSection/NavSection";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/cartList.slice";
import { useState } from "react";

const ProductDetail = ({ product }) => {
 const [counter, setCounter] = useState(1);

 const dispatch = useDispatch(); 

 const handleClick = () => {
    const newProduct = {...product, quantity: counter}
    dispatch(addProduct(newProduct));
 }
 
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
            <CartItemCounter setCounter={setCounter} counter={counter}/>
            <button onClick={handleClick} className="desc-btn-add">{`AGREGAR $${product.price * counter}`}</button>
        </div>
    </>
  );

}

export default ProductDetail;
