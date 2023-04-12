import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
/* import ProductDetail from "./components/Descripcion/ProductDetail"; */
import Home from "./components/Home/Home"
import { CardFormContainer } from "./components/Card/CardFormContainer/CardFormContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:type/:productId" element={<ProductDetailContainer/>} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="/credit" element={<CardFormContainer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
