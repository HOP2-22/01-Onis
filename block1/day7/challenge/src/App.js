import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home,Products, Services, Contacts, Login} from "./pages"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
