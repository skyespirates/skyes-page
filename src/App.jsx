import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Projects />
      <Skillset />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
