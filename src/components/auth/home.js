import React from 'react'
import Pages from '../pages'
import TodoList from '../TodoList'

function Home() {
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