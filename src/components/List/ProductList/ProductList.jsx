import "./ProductList.css";
import Product from "../Product/Product";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const ProductList = ({ type }) => {

    const splideOptions = {
        type: "loop",
        drag: "free",
        rewind: true,
        snap: true,
        gap: "2.1em",
        perPage: 2,
      }

    return(
        <div className="product-list-container">
            <div className={`product-list-title ${type.id}`}>
                <h3>{type.name}</h3>
            </div>
            <div className="product-list">
                <Splide options={splideOptions}>
                    {
                        type.products.map(product => {
                            return(
                                <SplideSlide key={product.id}>
                                    <Product product={product} typeId={type.id}/>
                                </SplideSlide>
                            );
                        })
                    }
                </Splide>
            </div>
        </div>
    );
}

export default ProductList;