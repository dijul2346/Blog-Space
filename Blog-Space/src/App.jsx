import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router";
import Signup from './components/signup';
import Signin from './components/signin';
import Home from './components/home';
import CreateBlog from './components/createBlog';
import Profile from './components/profile';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/createBlog" element={<CreateBlog/>}/>
        <Route path="/dashboard" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    
      
  )
}

export default App