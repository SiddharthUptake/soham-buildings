import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
} from "reactstrap";
import logo from "../assets/Sohamlogo.png"

function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <Navbar className="px-2" color="dark" dark expand="md">
        <Link to="/"> <img className="logo" src={logo} alt="logo"  /></Link>
        {/* <NavbarToggler onClick={toggleNavbar} /> */}
        {/* <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/features" className={location.pathname === "/features" ? "active" : ""}>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"  className={location.pathname === "/contact" ? "active" : ""}>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
}

export default Header;
