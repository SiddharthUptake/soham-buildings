import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
import logo from "../assets/Sohamlogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar className={`px-2 ${isScrolled ? "navbar-scrolled" : ""}`}
        color={isScrolled ? "dark" : "transparent"}
        dark
        expand="md"
        fixed="top">
        <a href="#">
   
          <img className="logo" src={logo} alt="logo" />
        </a>
        <NavbarToggler onClick={toggleNavbar} />
         <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="#" >Home</a>
            </NavItem>
            <NavItem>
              <a href="#about" >About</a>
            </NavItem>
            <NavItem>
              <a href="#features" className={location.pathname === "/features" ? "active" : ""}>Features</a>
            </NavItem>
            <NavItem>
              <a href="#contact"  className={location.pathname === "/contact" ? "active" : ""}>Contact Us</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
