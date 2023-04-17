import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home"
import { CardFormContainer } from "./components/Card/CardFormContainer/CardFormContainer";
import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import ProductDetailContainer from "./components/Detail/ProductDetailContainer/ProductDetailContainer";
import CartContainer from "./components/Cart/CartContainer/CartContainer";
import SingIn from "./components/Auth/SingIn";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SingIn/>} />
          <Route path="/register" element={<Signup/>} />
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
