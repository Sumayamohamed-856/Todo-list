import React from 'react'

function Signup() {
  return (
    <div className='signup-bg'>
        <div className='input-types'>
            <input 
            placeholder='Enter username'
            type='text'
            name='text'
            className='user-input'
            />

            <input
            placeholder='Create your password'
            type='password'
            name='password'
            className='user-input'
            />

            <input
            placeholder='Confrom your password'
            type='password'
            name='password'
            className='user-input'
            />

           <button className='btn'>Submit</button>

        </div>

        
        
    </div>
  )
}

export default Signup