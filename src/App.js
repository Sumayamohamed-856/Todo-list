import React from 'react';
import './components/styles/App.scss';
import TodoList from './components/TodoList';
import Pages from './components/pages'
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Home from './components/auth/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
      </Routes> 
    </Router> 

  );
}

export default App;


