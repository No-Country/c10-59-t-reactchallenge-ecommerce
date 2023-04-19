import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux'
import { setUserAuth } from '../../store/slices/userAuth.slice'

const NavMenu = ({isopen}) => {

  const dispatch = useDispatch()
  const HandleSingOut = () => {
    dispatch(setUserAuth(null))
    signOut(auth)
  }

  return (
    <>
    
  <div className={`nav__items ${isopen && "open"}`}>
  <Link>Tienda</Link>
  <Link to="/credit">Credit</Link>
  <Link to="/auth">auth</Link>
  <Link>Menu</Link>
  <button onClick={HandleSingOut}>Cerrar Sesion</button>
  </div>
    </>
  )
}


export default NavMenu