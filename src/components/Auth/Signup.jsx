import React from 'react'
import { useRef } from 'react';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import NavSection from '../NavSection/NavSection';
import { useNavigate } from 'react-router';

const Signup = () => {

  const navigate = useNavigate  ()

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const SignupRegister = async (e) => {
    try {
      e.preventDefault();
      const response = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/")
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavSection title="Registro" />
      <div className="form__app">
        <form action="" className="form__form">
          <h1 className="form__title">Registrarse</h1>
          <div className="form__inputs">
            <div className="div__form">
              <h3 className="form__imput-title">Email</h3>
              <input className="form__input" ref={emailRef} type="email" placeholder="Email" />
            </div>
            <div>
              <h3 className="form__imput-title">Password</h3>
              <input className="form__input" ref={passwordRef} type="password" placeholder="Password" />
            </div>
          </div>

          <button className="btn__auth">
            <span className="btn__click" onClick={SignupRegister}>
              Registrarse
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
