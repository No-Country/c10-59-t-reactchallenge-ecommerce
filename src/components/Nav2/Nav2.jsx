import "../Nav2/nav.css";
import { useState } from "react";
import Closebtn from "../../assets/iconos/icon-red-cross.svg";
import NavMenu from "./NavMenu";
import Menuhambur from "../../assets/iconos/Menusvg.svg";

const Nav2 = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      {isopen == true ? (
        <div className="menu__container">
          <div className="menu__nav">
            <div></div>
            <h2 className="nav__title">Menu</h2>
            <img className="nav__close" src={Closebtn} alt="close" onClick={() => setIsopen(false)} />
          </div>
          <NavMenu isopen={isopen} />
        </div>
      ) : (
        <img src={Menuhambur} className="Menu__hamburguer" onClick={() => setIsopen(true)} alt="" />
      )}
    </>
  );
};

export default Nav2;
