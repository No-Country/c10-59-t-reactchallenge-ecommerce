import { Link, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home"
import { CardFormContainer } from "./components/Card/CardFormContainer/CardFormContainer";
import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import ProductDetailContainer from "./components/Detail/ProductDetailContainer/ProductDetailContainer";
import CartContainer from "./components/Cart/CartContainer/CartContainer";

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
          <Route path="/cart" element={<CartContainer/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
