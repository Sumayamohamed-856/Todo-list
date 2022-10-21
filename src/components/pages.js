import React from 'react'
import { useNavigate } from "react-router"


function Pages() {
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem("access_token")
    navigate('/')
  }

  return (
    <div className='nav-bar'>
        <h2>TODO APP</h2>
        <div className='icon-bar' onClick={logout}>LOGOUT</div>
     
    </div>
  )
}

export default Pages