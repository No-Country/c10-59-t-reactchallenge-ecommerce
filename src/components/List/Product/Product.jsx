import "./Product.css";
import { useNavigate } from "react-router-dom";
import Promo from "../../Promo/Promo";

const Product = ({ product, typeId }) => {
  const navigate = useNavigate();

  const handleProduct = () => navigate(`/product/${product.category}/${product.id}`);

  return (
    <div onClick={handleProduct} className="card">
      <div className="card-image">
        {
          product.isPromo && <Promo/>

        }
        <img src={product.img} />
        
      </div>
      <div className={`card-content ${typeId !== "paravos" && `card-content-${product.category}`}`}>
        <h5>{`${product.name} ${product.flavor}`}</h5>
        <p>{product.flavor}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
