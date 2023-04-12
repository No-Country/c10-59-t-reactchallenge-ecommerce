import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import SingIn from "./components/Auth/SingIn";
import { Carousel } from "react-bootstrap";


function App() {
  return (
    <div className="App">

      <Nav/>
      <Carousel/>
    </div>
  );
}

export default App;
