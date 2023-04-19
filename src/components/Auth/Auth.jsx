import React, { useState } from 'react'
import AuthGoogle from './AuthGoogle';

import { Link, Navigate, Route, Routes } from 'react-router-dom';
import NavSection from '../NavSection/NavSection';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { setUserAuth } from '../../store/slices/userAuth.slice';



const Auth = () => {

  const [loading, setLoading] = useState(false)


  const User = useSelector(state => state.User)

  

  console.log(User);

  return (
<div className="auth__container">


  <h2 className='auth__title'>Acceso a cuenta</h2>
<div className="auth__links">
<Link to="/login"><button>INICIAR SESIÓN</button></Link>
<Link to="/register"><button>REGISTRARSE</button></Link>
</div>

<div className='division'>
<span className='line'></span>
<span className='O'>O</span>
<span className='line'></span>
</div>
<AuthGoogle setLoading={setLoading} />

</div>


  )
}

export default Auth
