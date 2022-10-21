import React, { useEffect } from 'react'
import { useNavigate } from "react-router";
import Pages from '../pages'
import TodoList from '../TodoList'

function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const access_token = window.localStorage.getItem('access_token');
    if(!access_token) {
      navigate('/')
    }
  })

  return (
    <div>
        <Pages />
        <div className='todo-app'>
         <TodoList />
        </div>
       
    </div>
  )
}

export default Home