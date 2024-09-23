//import { useState, useEffect } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import NormalUser from './NormalUser';
import SuperUser from './SuperUser';



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/normaluser" element={<NormalUser />} />
          <Route path="/superuser" element={<SuperUser />} />       
      </Routes>
    </BrowserRouter>
  );
 
}

export default App;
