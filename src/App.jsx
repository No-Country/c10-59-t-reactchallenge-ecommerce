import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import SingIn from "./components/Auth/SingIn";
import Signup from "./components/Auth/Signup";
import Pedidos from "./components/Pedidos/Pedidos";
import CardGranCompra from "./components/helpers/CardGranCompra";
import CardEncantado from "./components/helpers/CardEncantado";


function App() {
  return (
    <div className="App">

      {/* <Nav/> */}
     <CardEncantado/>
    </div>
  );
}

export default App;
