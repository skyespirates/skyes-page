import React from "react";

export default function Skillset(props) {
  return (
    <div
      id={props.id}
      className="container"
      style={{ marginTop: "56px", paddingTop: "56px" }}
    >
      <h1 className="text-center">Skillset</h1>
      <ul class="list-group" style={style}>
        <li class="list-group-item">HTML5</li>
        <li class="list-group-item">CSS3</li>
        <li class="list-group-item">Bootstrap</li>
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">ReactJS</li>
        <li class="list-group-item">MongoDB</li>
        <li class="list-group-item">ExpressJS</li>
      </ul>
    </div>
  );
}
const style = {
  display: "block",
  margin: "0 auto",
  width: "30%",
};
