import React from 'react'

const Nav = ({user}) => {
  return (
    <div>
      <h1>{user?.DisplayName}</h1>
    </div>
  )
}

export default Nav