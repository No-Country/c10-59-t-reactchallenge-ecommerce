import React from 'react'
import { auth } from '../../utils/firebase'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartItem } from '../Cart/CartItem/CartItem'

const ProtectedRoutes = () => {
    const User = useSelector(state => state.User)

    // const [Isloggedgoogle, setIsloggedgoogle] = useState(false)

    useEffect(() => {
   


    }, [User])
    
   const navigate = useNavigate()

    if(User.email) {
       navigate("/cart")
    } else {
      return <Navigate to='/auth' />
    }
}

export default ProtectedRoutes