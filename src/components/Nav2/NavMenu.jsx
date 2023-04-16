import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase'

const NavMenu = ({isopen}) => {
  return (
    <>
    
  <div className={`nav__items ${isopen && "open"}`}>
  <Link>Tienda</Link>
  <Link>About</Link>
  <Link to="/auth">auth</Link>
  <Link>Menu</Link>
  <button onClick={() => signOut(auth)}>Cerrar Sesion</button>
  </div>
    </>
  )
}


export default NavMenu