import React from 'react'
import { auth } from '../../utils/firebase'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'


const ProtectedRoutes = () => {

  const User = useSelector(state => state.User)

  console.log(User?.uid);


    
    if(User) {
    return  <Outlet />
    } else {
       return <Navigate to='/auth' />
     }
}

export default ProtectedRoutes