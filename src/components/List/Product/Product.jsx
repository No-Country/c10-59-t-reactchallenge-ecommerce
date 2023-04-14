import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product, typeId }) => {
    const navigate = useNavigate();
    
    const handleProduct = () => navigate(`/product/${typeId}/${product.id}`);
   
    return(
        <div onClick={handleProduct} className="card">
            <img src={product.img} width={50} height={50} />
            <div className={`card-content card-content-${typeId}`}>
                <h5>{`${product.name} ${product.flavor}`}</h5>
                <p>{product.flavor}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
}

export default Product;
