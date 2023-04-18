import "./CarouselHome.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const CarouselHome = () => {

  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-home%2Fcarousel1.jpg?alt=media&token=8d505111-a381-4ed9-ada3-11509bd44b71",
    "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-home%2Fcarousel2.jpg?alt=media&token=9921841e-c234-4a2c-ae22-f364c724828e",
    "https://firebasestorage.googleapis.com/v0/b/project-beer-ecommerce.appspot.com/o/carousel-home%2Fcarousel3.jpg?alt=media&token=4444c3d2-3b65-4b8d-a48a-f158f8cb04d3"
  ]

  const splideOptions = {
    type: "loop",
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true
  }

  return(
    <Splide options={splideOptions} className="home-slider">
      {
        imagesList.map((image, index) => {
          return(
            <SplideSlide key={index}>
                <div className="home-slider-container">
                    <img src={image} alt="#" />
                </div>
            </SplideSlide>
          );
        })
      }
    </Splide>
  );
}

export default CarouselHome;
