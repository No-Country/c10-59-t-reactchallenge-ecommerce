import React from 'react'
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Signup = async (e) => {
    try {
      e.preventDefault();
      const response = await useCreateUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="">
        <h1>Registrarse</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />

        <button>
          <span onClick={Signup}>Resgistrarse</span>
        </button>
        <h6>
          Not yet register? <span onClick={Signup}>Sign in</span>
        </h6>
      </form> 
    </div>
  )
}

export default Signup