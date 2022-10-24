import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import IdSync from "./pages/Id";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" 
          element={<Home />}
          />
          <Route 
            path=":userID"
            element={<IdSync />}
          />
      </Routes>
    </BrowserRouter>
  )
};

export default App;