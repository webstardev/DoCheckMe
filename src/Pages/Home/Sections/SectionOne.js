import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import AppLogoImg from "../../../Assets/img/logo.png";

const SectionOne = () => {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-light navbar-floating"
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={AppLogoImg} alt="" width="240" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>How it Work</Nav.Link>
            <Nav.Link>Feature</Nav.Link>
            <Nav.Link>Our Client</Nav.Link>
            <Nav.Link>Video</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SectionOne;
