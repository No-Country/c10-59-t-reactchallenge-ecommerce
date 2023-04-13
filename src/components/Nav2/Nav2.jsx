import React, { useState } from "react";
import "../Nav2/nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import close from "../../assets/iconos/icon-red-cross.svg";
import { slide as Menu } from 'react-burger-menu'

const Nav2 = () => {
  


    return (
        <Menu left>
        
          <Link className="menu-item" to="/products">Product</Link>
          <Link id="about" className="menu-item" to="/credit">Metodo de pago</Link>
          <Link id="contact" className="menu-item" to="/auth">Auth</Link>
        </Menu>
      );
};

export default Nav2;
