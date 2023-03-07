import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Images/logo.png";
import "./Navbar.scss";
export default function NavbarFun() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        fixed="top"
        expanded={expanded}>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} height="40px"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              onClick={() => setExpanded(expanded ? false : "expanded")}>
              <Link className="nav-link-my" to="/about">
                About
              </Link>
              <Link className="nav-link-my" to="/events">
                Events
              </Link>
              <Link className="nav-link-my" to="/team">
                Team
              </Link>
              <Link className="nav-link-my" to="/testimonial">
                Testimonial
              </Link>
              {
                //<Link className="nav-link-my" to="/resources">
                //  Resources
                //</Link>
              }

              <Link className="nav-link-my" to="/contact">
                Contact
              </Link>
            </Nav>
            {
              //{localStorage.getItem("token") ? (
              //   <Nav>
              //     <button
              //       style={{ border: "none", background: "none", padding: "0px" }}
              //       className="button-nav"
              //       onClick={() => {
              //         navigate("/dashboard");
              //       }}
              //     >
              //       <img
              //         height="40px"
              //         src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
              //       ></img>
              //     </button>
              //     <Button
              //       variant="outline-danger"
              //       className="button-nav"
              //       onClick={() => {
              //         localStorage.removeItem("token");
              //         navigate("/");
              //       }}
              //     >
              //       LOGOUT
              //     </Button>
              //   </Nav>
              // ) : (
              //   <Nav>
              //     <Button
              //       variant="outline-secondary"
              //       className="button-nav"
              //       onClick={() => {
              //         navigate("/register");
              //       }}
              //     >
              //       REGISTER
              //     </Button>
              //     <Button
              //       variant="outline-secondary"
              //       className="button-nav"
              //       onClick={() => {
              //         navigate("/login");
              //       }}
              //     >
              //       LOGIN
              //     </Button>
              //   </Nav>
              // )}
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
