import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useDispatch } from 'react-redux'
import { setUserAuth } from '../../store/slices/userAuth.slice'

const NavMenu = ({ isopen }) => {

  const dispatch = useDispatch()
  const HandleSingOut = () => {
    dispatch(setUserAuth(null))
    signOut(auth)
  }

  return (
    <>
    
  <div className={`nav__items ${isopen && "open"}`}>
  <Link to="/tienda">Tienda</Link>
  <Link to="/pedidos">Pedidos</Link>
  <Link to="/auth">Identificarse</Link>
  <Link>Quienes Somos?</Link>
  <button onClick={HandleSingOut}>Cerrar Sesion</button>
  </div>
    </>
  );
};

export default NavMenu;
