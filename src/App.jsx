import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import CardFormContainer from "./components/Card/CardFormContainer/CardFormContainer";
import ProductDetailContainer from "./components/Detail/ProductDetailContainer/ProductDetailContainer";
import CartContainer from "./components/Cart/CartContainer/CartContainer";
import SingIn from "./components/Auth/SingIn";
import Signup from "./components/Auth/Signup";
import Pedidos from "./components/Pedidos/Pedidos";
import CardGranCompra from "./components/helpers/CardGranCompra";
import ProtectedRoutes from "./components/helpers/ProtectedRoutes";
import Promo from "./components/Promo/Promo";

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
          <Route path="/tienda" element={<Store />} />
          <Route path="/credit" element={<CardFormContainer />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/testing" element={<Promo/>}/>

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
