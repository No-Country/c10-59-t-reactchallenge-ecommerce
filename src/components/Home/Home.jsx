import React from 'react'
import ProductListContainer from '../List/ProductListContainer/ProductListContainer'
import Nav2 from '../Nav2/Nav2'
import CarouselHome from '../Carousel/CarouselHome/CarouselHome';
import CarouselProducts from "../Carousel/CarouselProducts/CarouselProducts";

const Home = () => {
  return (
    <div className='home-container'>
        <Nav2/>
        <CarouselHome/>
        <ProductListContainer isHome={true}/>
        <CarouselProducts/>
    </div>
  )
}

export default Home