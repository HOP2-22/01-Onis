import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/Products' element={<Products />}/>
        <Route  path='/Services' element={<Services />}/>
        <Route  path='/Contacts' element={<Contacts />}/>
        <Route  path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
