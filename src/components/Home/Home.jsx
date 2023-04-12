import React from 'react'
import Nav from '../NavBar/Nav'
import Carousel from '../Carousel/Carousel'
import ProductListContainer from '../List/ProductListContainer/ProductListContainer'
const Home = () => {
  return (
    <div>
        <Nav/>
        <Carousel/>
        <ProductListContainer/>
    </div>
  )
}

export default Home