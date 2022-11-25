import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios";
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Post from './pages/Post'
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <BrowserRouter>
    <ThemeContext>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/Products' element={<Products />}/>
        <Route  path='/Services' element={<Services />}/>
        <Route  path='/Contacts' element={<Contacts />}/>
        <Route  path='/Login' element={<Login />}/>
        <Route path=":postId" element={<Post/>}/>
      </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
