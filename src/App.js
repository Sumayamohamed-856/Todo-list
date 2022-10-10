import React from 'react';
import './components/styles/App.css';
import TodoList from './components/TodoList';
import Pages from './components/pages'
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Home from './components/auth/home';



function App() {
  return (
    <div>
      
      
     
      <Home />
      <Login />
      <Signup />

      
      
    </div>
  );
}

export default App;
