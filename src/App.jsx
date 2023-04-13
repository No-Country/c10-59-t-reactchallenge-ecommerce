import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import ProductDetail from "./components/Descripcion/ProductDetail";
import Home from "./components/Home/Home"
import { CardFormContainer } from "./components/Card/CardFormContainer/CardFormContainer";
import CardGranCompra from './components/helpers/CardGranCompra'
import CardEncantado from "./components/helpers/CardEncantado";
import Nav2 from "./components/Nav2/Nav2";
function App() {
  return (
    <>
  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="/credit" element={<CardFormContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
