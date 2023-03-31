import React from 'react'
import '../NavBar/Nav.css'

const Nav = ({user}) => {
  return (
    <div>
      <h1>{user?.DisplayName}</h1>
    </div>
  )
}

export default Nav