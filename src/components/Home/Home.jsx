import React from 'react'
import Carousel from '../Carousel/Carousel'
import ProductListContainer from '../List/ProductListContainer/ProductListContainer'
import Nav2 from '../Nav2/Nav2'
const Home = () => {
  return (
    <div>
    <Nav2/>
        <Carousel/>
        <ProductListContainer isHome={true}/>
    </div>
  )
}

export default Home