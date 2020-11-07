import React from "react";

export default function Header(props) {
  return (
    <div
      id={props.id}
      className="container-fluid"
      style={{
        height: "100vh",
        minWidth: "450px",
        paddingTop: "56px",
      }}
    >
      <div className="container">
        <h1>Full-Stack Developer (MERN)</h1>
        <p>I create front-end, back-end or both. I love what I do.</p>
      </div>
    </div>
  );
}
