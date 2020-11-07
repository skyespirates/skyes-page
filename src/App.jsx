import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
    </React.Fragment>
  );
}
