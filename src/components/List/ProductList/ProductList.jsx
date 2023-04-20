import "./ProductList.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Product from "../Product/Product";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductList = ({ type }) => {
  const splideOptions = {
    type: "loop",
    drag: true,
    rewind: true,
    snap: true,
    gap: "2.1em",
    perPage: 5,
    arrows: false,
    width: "85%",
    margin: "0 auto",
    pagination: false,
    breakpoints: {
      640: {
        perPage: 2,
        width: "100%",
      },
      800: {
        perPage: 3,
        width: "100%",
      },
      1300: {
        perPage: 4,
        width: "100%",
      }
    }
  };

  return (
    <div className="product-list-container">
      <div className={`product-list-title ${type.id}`}>
        <h3>{type.name}</h3>
      </div>
      <div className="product-list">
        <Splide options={splideOptions}>
          {type.products.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <Product product={product} typeId={type.id} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default ProductList;
