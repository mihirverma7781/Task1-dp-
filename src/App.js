import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Navbar from './components/uicomps/Navbar';
import Home from './components/maincomps/Home';
import About from './components/maincomps/About';


// --------------------------------------------//

function App() {
  return (
   
       <>
      <Navbar/>
        <Home/>
        <About/>
      </>
    
  );
}

export default App;
