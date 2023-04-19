import ProductListContainer from '../List/ProductListContainer/ProductListContainer';
import CarouselHome from '../Carousel/CarouselHome/CarouselHome';
import CarouselProducts from "../Carousel/CarouselProducts/CarouselProducts";
import NavBar from '../Nav2/NavBar';
import CartNav from "../Cart/CartNav/CartNav";

const Home = () => {
  return (
    <div className='home-container'>
        <NavBar/>
        <CarouselHome/>
        <ProductListContainer isHome={true}/>
        <CartNav/>
        <CarouselProducts/>
    </div>
  );
}

export default Home;
