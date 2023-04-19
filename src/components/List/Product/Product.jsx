import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product, typeId }) => {
  const navigate = useNavigate();

  const handleProduct = () => navigate(`/product/${product.category}/${product.id}`);

  return (
    <div onClick={handleProduct} className="card">
      <img src={product.img} width={50} height={50} />
      <div className={`card-content ${typeId !== "paravos" && `card-content-${product.category}`}`}>
        <h5>{`${product.name} ${product.flavor}`}</h5>
        <p>{product.flavor}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
