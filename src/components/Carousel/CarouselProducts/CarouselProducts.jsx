import "./CarouselProducts.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./CarouselProducts.css";
import { Link } from "react-router-dom";

const CarouselProducts = () => {
    const imagesList = [
        "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-products%2Fpampa-stout-black.png?alt=media&token=ffbdac69-f328-484f-913f-7e0d19d0d636",
        "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-products%2Fpenon-de-aguila-red-waldbier.png?alt=media&token=00ea0755-6da4-4d49-8816-5c72e74b7b4d",
        "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-products%2Fweidmann-negra_-schwarzbier.png?alt=media&token=996891fd-fb65-4545-85f3-c52ae7341ccf"
    ];

    const splideOptions = {
        type: "loop",
        perPage: 2,
        focus: "center",
        gap: "-100px",
        pagination: false,
        arrows: false
    }

  return (
    <>
        <h3 className="carousel-products-title">MÁS BIRRAS</h3>
        <Splide options={splideOptions} className="product-slider">
            {imagesList.map((image, index) => {
                return(
                    <SplideSlide key={index}>
                        <div className="slide-container">
                            <img src={image} alt="#" />
                        </div>
                    </SplideSlide>
                );
            })}
        </Splide>
        <button className="carousel-products-btn"><Link to="/tienda">IR A LA TIENDA</Link></button>
    
    </>
  )
}

export default CarouselProducts