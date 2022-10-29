import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Signup() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    console.log('target changes', e.target.value)
    setEmail(e.target.value)
  } 
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = () => {
    axios.post('https://sm-todo-list.herokuapp.com/signup', {email: email, password: password})
    .then(response => {
      window.localStorage.setItem('access_token', response.data.access_token);
      navigate("/dashboard");
    })
    .catch(err => {
      console.log("error", err)
    })
  }

  return (
    <div className='signup-bg'>
        <div className='input-types'>
            <input 
            placeholder='Enter username'
            type='text'
            name='text'
            className='user-input'
            onChange={handleEmailChange}
            />

            <input
            onChange={handlePasswordChange}
            placeholder='Create your password'
            type='password'
            name='password'
            className='user-input'
            />

           <button className='btn'
           onClick={handleSubmit}
           >Submit</button>

        </div>

        
        
    </div>
  )
}

export default Signup