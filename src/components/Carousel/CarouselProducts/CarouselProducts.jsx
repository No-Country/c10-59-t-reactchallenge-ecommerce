import "./CarouselProducts.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const CarouselProducts = () => {
  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-products%2Fpampa-stout-black-removebg-preview%201.png?alt=media&token=81269cd0-6546-4210-b9ad-07d1c0ed6c85",
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-products%2Fpenon-de-aguila-red-waldbier-removebg-preview%201.png?alt=media&token=762fd981-6387-4f32-9694-d1fc5a8b16e9",
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-products%2Fweidmann-negra_-schwarzbier-removebg-preview%201.png?alt=media&token=ab97c76b-d3d6-49b9-8e02-c5910c9010bf",
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
