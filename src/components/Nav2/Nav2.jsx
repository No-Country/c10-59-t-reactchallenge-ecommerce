import React, { useState } from "react";
import "../Nav2/nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import close from "../../assets/iconos/icon-red-cross.svg";
import { slide as Menu } from "react-burger-menu";
import NavMenu from "./NavMenu";


const Nav2 = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      {isopen == true ? (
        <div className="menu__container">
          <div className="menu__nav">
            <div></div>
            <h2 className="nav__title">Menu</h2>
            <img className="nav__close" src={close} alt="close" onClick={() => setIsopen(false)} />
              
            
          </div>
          <NavMenu isopen={isopen} />
        </div>
      ) : (
        <AiOutlineMenu
          className="Menu__hamburguer"
          onClick={() => setIsopen(true)}
        />
      )}
    </>
  );
};

export default Nav2;
