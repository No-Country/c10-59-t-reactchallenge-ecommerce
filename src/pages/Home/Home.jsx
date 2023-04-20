import "./Home.css";
import ProductListContainer from '../../components/List/ProductListContainer/ProductListContainer';
import CarouselHome from '../../components/Carousel/CarouselHome/CarouselHome';
import CarouselProducts from "../../components/Carousel/CarouselProducts/CarouselProducts";
import NavBar from '../../components/Nav2/NavBar';
import CartNav from "../../components/Cart/CartNav/CartNav";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <NavBar/>
      <div className='home-container'>
          {loading && <CarouselHome/>}
          <ProductListContainer isHome={true} setLoading={setLoading}/>
          {loading && <CarouselProducts/>}
      </div>
      {loading && <CartNav/>}
    </>
  );
}

export default Home;
