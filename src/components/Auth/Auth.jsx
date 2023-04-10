import React from 'react'
import AuthGoogle from './AuthGoogle';

import SingIn from './SingIn';
import { auth } from '../../utils/firebase';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './Signup';


const Auth = () => {
  

  return (
<div className="auth__container">
  <h2 className='auth__title'>Acceso a cuenta</h2>
<div className="auth__links">
<button><Link to="/login">INICIAR SESION</Link></button>
<button><Link to="/register">REGISTRARSE</Link></button>
<AuthGoogle/>
</div>
</div>
  )
}

export default Auth