import React, { Children } from 'react'
import { auth } from "../../utils/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import "../Auth/auth.css"
import { useDispatch } from 'react-redux';
import { setUserAuth } from '../../store/slices/userAuth.slice';
import { AiFillGoogleCircle } from 'react-icons/ai'

const AuthGoogle = () => {

  const dispatch = useDispatch()

    const [user, setUser] = useAuthState(auth);

    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
      const result = await signInWithPopup(auth, googleAuth);
    };
    
    
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
    
<button>
  <AiFillGoogleCircle onClick={login}/>
</button>
    
  </>
  )
}

export default AuthGoogle