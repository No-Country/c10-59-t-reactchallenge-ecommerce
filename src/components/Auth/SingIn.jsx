import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useRef } from 'react';
import { auth } from '../../utils/firebase';

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
          console.log(auth.currentUser);
        } catch (error) {
          console.log(error);
        }
      }
    

  return (
    <div className='form__app'>
        
  <form action="" className='form__form'>
  <h1 className='form__title'>Login</h1>
  <div className="form__inputs">
   <div className='div__form'>
   <h3 className='form__imput-title'>Email</h3>
  <input className='form__input' ref={emailRef} type="email" placeholder="Email" />
   </div>
  <div>
  <h3 className='form__imput-title'>Password</h3>
  <input className='form__input' ref={passwordRef} type="password" placeholder="Password" />
  </div>
  </div>

  <button className='btn__auth'>
    <span className='btn__click' onClick={SignInLogin}>Inicia Sesion</span>
  </button>
 
</form>

    </div>
  )
}

export default SingIn