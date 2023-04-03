import React from 'react'
import '../NavBar/Nav.css'
import { useSelector } from 'react-redux'

const Nav = () => {
  const user = useSelector(state => state.User)
  console.log(user);
  return (

    <div>
      <h1>{user?.user}</h1>
       <img src={user?.photo} alt="" /> 
       <h2>{user?.email}</h2>
    </div>
  )
}

export default Nav