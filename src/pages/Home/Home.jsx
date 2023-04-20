import "./Home.css";
import ProductListContainer from '../../components/List/ProductListContainer/ProductListContainer';
import CarouselHome from '../../components/Carousel/CarouselHome/CarouselHome';
import CarouselProducts from "../../components/Carousel/CarouselProducts/CarouselProducts";
import NavBar from '../../components/Nav2/NavBar';
import CartNav from "../../components/Cart/CartNav/CartNav";

const Home = () => {
  return (
    <>
      <NavBar/>
      <div className='home-container'>
          <CarouselHome/>
          <ProductListContainer isHome={true}/>
          <CarouselProducts/>
      </div>
      <CartNav/>
    </>
  );
}

export default Home;
