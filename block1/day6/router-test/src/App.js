import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {SignUp} from './pages/Signup';
import {UserId} from './pages/userId';

function App() {
  return ( <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path=":userId" element={<UserId />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
