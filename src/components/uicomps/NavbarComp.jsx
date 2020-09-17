import React from 'react'
import '../stylesheets/Navbar.css'
import logo from '../premiumlogo (1)/onlinelogomaker-091720-2259-8525.png'
import { Navbar,Nav,Link,NavDropdown } from 'react-bootstrap';
const NavbarComp=()=> {
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
  <Navbar.Brand href="#home">MIHIR VERMA  .</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#skills">SKILLS</Nav.Link>
      <Nav.Link href="#projects">PROJECTS</Nav.Link>
      <Nav.Link href="#contact-form">CONTACT</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

export default NavbarComp
