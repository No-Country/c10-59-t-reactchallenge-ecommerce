import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react'
import { useRef } from 'react';
import { auth } from '../../utils/firebase';
import AuthGoogle from './AuthGoogle';
import { useSelector } from 'react-redux';

const SingIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const SignInLogin = async e => {
        try {
          e.preventDefault();
          const response = await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
          );
          
          console.log(response.user);
        } catch (error) {
          console.log(error);
        }
      }
    
    
  return (
    <div className='form__app'>
        
  <form action="" className='form__form'>
  <h1 className='form__title'>Iniciar Sesión</h1>
  <div className="form__inputs">
   <div className='div__form'>
   <span className='form__imput-title'> Email</span>
  <input className='form__input' ref={emailRef} type="email" placeholder="Correo" />
   </div>
  <div>
  <span className='form__imput-title'>Contraseña</span>
  <input className='form__input' ref={passwordRef} type="password" placeholder='Contraseña' />
  </div>
  </div>

  <button className='btn__auth' onClick={SignInLogin}>
Inicia Sesion
  </button>

<div className='division'>
<span className='line'></span>
<span className='O'>O</span>
<span className='line'></span>
</div>

  <AuthGoogle/>
 
</form>




    </div>
  )
}

export default SingIn