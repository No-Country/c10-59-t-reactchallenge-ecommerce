import React from 'react'
import { auth } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import "../Auth/auth.css"

const Auth = () => {
    const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    // console.log(user);
  }, [user]);

console.log(user);
  return (
    <>
    <div className="auth">
      <h1 className="tittle">Login Google auth!</h1>
      <p>{typeof user}</p>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      
      {user == user?.email ? 
        <button onClick={login}>login</button>
        : 
        <button onClick={() => signOut(auth)}> Cerrar session</button>
      }

    </div>
  </>
  )
}

export default Auth
