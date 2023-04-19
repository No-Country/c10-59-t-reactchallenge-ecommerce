import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home"
import CardFormContainer from "./components/Card/CardFormContainer/CardFormContainer";
import ProductListContainer from "./components/List/ProductListContainer/ProductListContainer";
import ProductDetailContainer from "./components/Detail/ProductDetailContainer/ProductDetailContainer";
import CartContainer from "./components/Cart/CartContainer/CartContainer";
import SingIn from "./components/Auth/SingIn";
import Signup from "./components/Auth/Signup";
import Pedidos from "./components/Pedidos/Pedidos";
import CardGranCompra from "./components/helpers/CardGranCompra";
import ProtectedRoutes from "./components/helpers/ProtectedRoutes";

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
          <Route path="/cart" element={<CartContainer/>} />

          <Route element={<ProtectedRoutes/>}>
          <Route path="/credit" element={<CardFormContainer />} />
          <Route path="/pedidos" element={<Pedidos/>} />
          <Route path="/gracias" element={<CardGranCompra/>}/>

          </Route>
        </Routes>
      </div> 
    </>
  );
}

export default App;
