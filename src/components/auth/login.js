import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from "react-router"

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleUsernameChange = (e) => {
    setEmail(e.target.value)
  } 
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = () => {
    axios.post('http://localhost:5000/login', {email: email, password: password})
    .then(response => {
      window.localStorage.setItem('access_token', response.data.access_token);
      navigate("/dashboard");
    })
    .catch(err => {
      console.log("error", err)
    })
  }
  


  return (
    <div className='login-app'>
        <div className='input-types'>
           
            <input
              placeholder='Username'
              type='text'
              name='text'
              className='user-input'
              onChange={handleUsernameChange}
              />

            <input
              placeholder='password'
              type='password'
              name='password'
              className='user-input'
              onChange={handlePasswordChange}
            />

           <button className='btn' onClick={handleSubmit}>Login</button>

           <div className='create'>
            <div>OR</div>
            <a href='http://localhost:3000/signup'>
              Create an account
            </a>
           </div>

        </div>
    </div>
  )
}

export default Login