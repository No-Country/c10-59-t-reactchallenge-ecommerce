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
    <div>
        
  <form action="">
  <h1>Login</h1>
  <input ref={emailRef} type="email" placeholder="Email" />
  <input ref={passwordRef} type="password" placeholder="Password" />

  <button>
    <span onClick={SignInLogin}>Login</span>
  </button>
 
</form>

    </div>
  )
}

export default SingIn