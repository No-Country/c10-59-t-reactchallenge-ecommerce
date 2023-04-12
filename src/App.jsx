import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import SingIn from "./components/Auth/SingIn";
import Carousel  from "./components/Carousel/Carousel";
import Descipcion from "./components/Descripcion/descripcion";


function App() {
  return (
    <div className="App">

      <Nav/>
     <SingIn/>
      <Carousel/>
      <Descipcion />
    </div>
  );
}

export default App;
