import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Navbar, Nav } from "react-bootstrap";

export default function App() {
  return (
    <React.Fragment>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="d-none d-lg-block" href="#header">
            Skyes Crawford
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skillset">Skillset</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Header id="header" />
      <Projects id="projects" />
      <Skillset id="skillset" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </React.Fragment>
  );
}
