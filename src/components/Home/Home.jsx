import React from 'react'
import Carousel from '../Carousel/Carousel'
import ProductListContainer from '../List/ProductListContainer/ProductListContainer'
import Nav2 from '../Nav2/Nav2'
import CarouselProducts from '../Carousel/CarouselProducts/CarouselProducts';

const Home = () => {
  return (
    <div className='home-container'>
        <Nav2/>
        <Carousel/>
        <ProductListContainer isHome={true}/>
        <CarouselProducts/>
    </div>
  )
}

export default Home