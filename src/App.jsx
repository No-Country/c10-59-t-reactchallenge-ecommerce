import { useState } from "react";
import Nav from "./components/NavBar/Nav";
import Auth from "./components/Auth/Auth";
import { Route, Routes } from "react-router";
import SingIn from "./components/Auth/SingIn";
import { CartItem } from "./components/Cart/CartItem/CartItem";
import Signup from "./components/Auth/Signup";
import ProtectedRoutes from "./components/helpers/ProtectedRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <> 
<Auth/>
    
    </>
  );
}

export default App;
