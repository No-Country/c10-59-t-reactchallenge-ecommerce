import React, { Children } from 'react'
import { auth } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import "../Auth/auth.css"
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../store/slices/userAuth.slice';

const AuthGoogle = () => {

  const dispatch = useDispatch()

    const [user, setUser] = useAuthState(auth);

    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
      const result = await signInWithPopup(auth, googleAuth);
    };
    
    console.log();
    
    useEffect(() => {
      
      const usuarios = {
        user: user?.displayName,
        email: user?.email,
        photo: user?.photoURL
      }
      console.log(usuarios);

      dispatch(setUserAuth(usuarios))
    }, [user]);
    
    
  


  return (
    <>
    <div className="auth">
      <h1 className="tittle">Login Google auth!</h1>
      {/* <p>{typeof user}</p>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      {user == null ? 
      <img src="http://cdn.onlinewebfonts.com/svg/img_131793.png" width={50} height={50} alt='no hay imagen'/>
      :
      <img src={`${user?.photoURL}`} width={100} height={100} alt={user?.displayName}/> 
    }  */}
      
      {user == user?.email ? 
        <button onClick={login}>login</button>
        : 
        <button onClick={() => signOut(auth)}> Cerrar session</button>
      }

    </div>
  </>
  )
}

export default AuthGoogle