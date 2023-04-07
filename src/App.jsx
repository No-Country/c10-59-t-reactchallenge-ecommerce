import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import { CartContainer } from "./components/CartContainer/CartContainer";

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Auth />
      
    </div>
  );
}

export default App;
