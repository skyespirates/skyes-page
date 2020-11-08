import React from "react";

export default function Skillset(props) {
  return (
    <div
      id={props.id}
      className="container"
      style={{ marginTop: "56px", paddingTop: "56px" }}
    >
      <h1 className="text-center">Skillset</h1>
      <ul className="list-group" style={style}>
        <li className="list-group-item">HTML5</li>
        <li className="list-group-item">CSS3</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">ReactJS</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">ExpressJS</li>
      </ul>
    </div>
  );
}
const style = {
  display: "block",
  margin: "0 auto",
  width: "30%",
};
