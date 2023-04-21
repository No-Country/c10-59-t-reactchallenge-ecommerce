import "./CarouselHome.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const CarouselHome = () => {
  const imagesList = [
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-home%2Fcarousel1.jpg?alt=media&token=81cb3a73-9a8a-4ec7-859b-96bad060c4a5",
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-home%2Fcarousel2.jpg?alt=media&token=dccaecf3-2c9f-4592-8014-f04f9101e5e1",
    "https://firebasestorage.googleapis.com/v0/b/project-birra-eb422.appspot.com/o/carousel-home%2Fcarousel3.jpg?alt=media&token=859d52df-e90f-4691-a873-8368c6b5f89c",
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
