import "./CarouselProducts.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const CarouselProducts = () => {
  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-products%2Fpampa-stout-black-removebg-preview%201.png?alt=media&token=beb7e899-c389-4505-a3bf-98e060fb2c44",
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-products%2Fpenon-de-aguila-red-waldbier-removebg-preview%201.png?alt=media&token=cbb88d50-74e1-4ccf-8b61-9105f2cb60a6",
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-products%2Fweidmann-negra_-schwarzbier-removebg-preview%201.png?alt=media&token=e2a407a5-c1d8-407e-b733-51f35edacbea",
  ];

  const splideOptions = {
    drag: "free",
    type: "loop",
    perPage: 2,
    focus: "center",
    gap: "-660px",
    pagination: false,
    arrows: false,
    breakpoints: {
      1100: {
        gap: "-100px"
      },
      1300: {
        gap: "-200px"
      },
      1600: {
        gap: "-200px"
      }
    }
  };

  return (
    <>
      <h3 className="carousel-products-title">MÁS BIRRAS</h3>
      <Splide options={splideOptions} className="product-slider">
        {imagesList.map((image, index) => {
          return (
            <SplideSlide key={index}>
              <div className="slide-container">
                <img src={image} alt="#" />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <button className="carousel-products-btn">
        <Link to="/tienda">IR A LA TIENDA</Link>
      </button>
    </>
  );
};

export default CarouselProducts;
