import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/uicomps/NavbarComp';
import Home from './components/maincomps/Home';
import About from './components/maincomps/About';
import Footers from './components/maincomps/Footers';
import Skills from './components/maincomps/Skills';
import Parallyx from './components/maincomps/Parallyx';
import Projects from './components/maincomps/Projects';
import ContactForm from './components/maincomps/ContactForm';
import NavbarComp from './components/uicomps/NavbarComp';


// --------------------------------------------//

function App() {
  return (
   
       <>
      <NavbarComp/>
        <Home/>
        <About/>
        <Skills/>
        <Parallyx/>
        <Projects/>
        <ContactForm/>
        <Footers/>
      </>
    
  );
}

export default App;
