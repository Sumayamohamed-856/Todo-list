import React from 'react'

function Login() {
  return (
    <div className='login-app'>
        <div className='input-types'>
           
            <input
              placeholder='Username'
              type='text'
              name='text'
              className='user-input'
              />

            <input
              placeholder='password'
              type='password'
              name='password'
              className='user-input'
            />
        
          

           <button className='btn'>Login</button>

           <div className='create'>
            <div>OR</div>
            <a href=''>
              Create an account
            </a>
           </div>

        </div>
       
        
    </div>
  )
}

export default Login