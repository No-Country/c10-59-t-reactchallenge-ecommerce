import "./Product.css";

const Product = ({product}) => {
    return(
        <div className="product-card">
            <img src="#" />
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