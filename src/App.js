import {Route, Routes} from "react-router-dom";
import { useEffect, useState} from "react";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path ="/" element ={<Login />}/>
      <Route path ="/welcome" element ={<Welcome/>}/>
      <Route path ="/dashboard" element ={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
