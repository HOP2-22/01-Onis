import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './layout/layout';
import {Home,Products, Services, Contacts, Login} from "./pages"


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/products' element={<Products />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </Layout>
     
    </BrowserRouter>
  );
}

export default App;
