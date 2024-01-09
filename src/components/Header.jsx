import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/Sohamlogo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar className="px-2" color="dark" dark expand="md">
        <img className="logo" src={logo} alt="logo" />
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"  className={location.pathname === "/contact" ? "active" : ""}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
