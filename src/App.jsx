import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import SingIn from "./components/Auth/SingIn";
import { ListContainer } from "./components/ListContainer/ListContainer";


function App() {
  return (
    <div className="App">
      <ListContainer/>
      {/* <Nav/> */}
     {/* <SingIn/> */}
    </div>
  );
}

export default App;
