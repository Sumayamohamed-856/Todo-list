import React from 'react'
import { useNavigate } from "react-router"
import { FiLogOut } from 'react-icons/fi';


function Pages() {
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem("access_token")
    navigate('/')
  }

  return (
    <div className='nav-bar'>
        <h2>TODO LIST</h2>
        <div className='icon-bar' onClick={logout}><FiLogOut /></div>
     
    </div>
  )
}

export default Pages