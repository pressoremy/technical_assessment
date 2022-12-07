import {Route, Routes, UNSAFE_RouteContext} from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createContext, useState} from "react";

//Creates the global context for name and email
export const NameContext = createContext(null);
export const EmailContext = createContext(null);



function App() {
  //states for updating name and email across the application
  const[name, setName] = useState ("Name");
  const [email, setEmail] = useState ("Email");
  return (
    <NameContext.Provider value ={{name, setName}}>
      <EmailContext.Provider value ={{email, setEmail}}> 
        <Routes>
          <Route path ="/" element ={<Login />}/>
          <Route path ="/welcome" element ={<Welcome/>}/>
          <Route path ="/dashboard" element ={<Dashboard/>}/>
        </Routes>
      </EmailContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
