import {Route, Routes} from "react-router-dom";
import { useEffect, useState} from "react";
import React from "react";
import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

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
