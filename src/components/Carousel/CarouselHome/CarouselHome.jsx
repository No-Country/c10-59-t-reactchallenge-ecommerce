import "./CarouselHome.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const CarouselHome = () => {
  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-home%2Fcarousel1.jpg?alt=media&token=5434ff36-06f8-425e-bf8c-0d67040caee2",
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-home%2Fcarousel2.jpg?alt=media&token=d86a262e-ad0f-4816-aa75-1ba8f83180ca",
    "https://firebasestorage.googleapis.com/v0/b/proyecto-birra.appspot.com/o/carousel-home%2Fcarousel3.jpg?alt=media&token=f92ed747-064b-4e6e-a3a8-3ddbbf39ec70",
  ];

  const splideOptions = {
    type: "loop",
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
  };

  return (
    <Splide options={splideOptions} className="home-slider">
      {imagesList.map((image, index) => {
        return (
          <SplideSlide key={index}>
            <div className="home-slider-container">
              <img src={image} alt="#" />
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default CarouselHome;
