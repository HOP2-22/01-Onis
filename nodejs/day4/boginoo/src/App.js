import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";
import Link from "./routes/link";
import { Provider } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/:shortlink" element={<Link />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
