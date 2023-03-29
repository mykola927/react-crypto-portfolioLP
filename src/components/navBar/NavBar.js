import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/coin-logo.png";
import "./NavBar.css";
import Flip from "react-reveal/Flip";
const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="animate-navbar nav-theme justify-content-between"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src={Logo}
            alt="Logo"
            width="80rem"
            height="80rem"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#skills">Plan</Nav.Link>
            <Nav.Link href="#projects">Login</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
