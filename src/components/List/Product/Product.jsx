import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product, typeId }) => {
    const navigate = useNavigate();
    
    const handleProduct = () => navigate(`/product/${typeId}/${product.id}`);
   
    return(
        <div onClick={handleProduct} className="product-card">
            <img src={product.img} width={50} height={50} />
            <div>
                <h5>{`${product.name} ${product.flavor}`}</h5>
                <p>Lager</p>
            </div>
            <div>
                <p>{product.price}</p>
            </div>
        </div>
    );
}

export default Product;