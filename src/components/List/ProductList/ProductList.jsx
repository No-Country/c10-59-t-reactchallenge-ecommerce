import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ type }) => {
    return(
        <div className="product-list-container">
            <h3>{type.name}</h3>
            <div className="product-list">
                {
                    type.products.map(product => {
                        return(<Product key={product.id} product={product} typeId = {type.id}/>)
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;