import { useState } from "react";
import Nav from "./components/NavBar/Nav";


import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Card } from "react-bootstrap";
import { CardFormContainer } from "./components/Card/CardFormContainer/CardFormContainer";
import Home from "./components/Home/Home";


function App() {
  return (
    <>
    <div className="App">
    
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/auth" element={<Auth/>}/>
<Route path="/product/:id" element={<Card/>}/>
<Route path="/products" element={<ProductListContainer/>}/>
<Route path="/credit" element={<CardFormContainer />}/>



    </Routes>
    </div>
    </>
  );
}

export default App;
