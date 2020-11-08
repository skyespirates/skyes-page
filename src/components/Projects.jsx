import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Projects(props) {
  return (
    <div
      id={props.id}
      className="container"
      style={{ marginTop: "56px", paddingTop: "56px" }}
    >
      <h1 className="text-center">My Recent Works</h1>
      <div className="row">
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Simple React App</Card.Title>
            <Card.Text className="d-none d-md-block">
              Apply react component, props, state and setState
            </Card.Text>
            <Button
              target="_blank"
              href="https://skyespirates.github.io/react-tutorial/"
              variant="primary"
              className=""
            >
              Visit
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Simple Todo App Using ReactJS</Card.Title>
            <Card.Text className="d-none d-md-block">
              You can input and delete todo. Create using ReactJS and get
              requests and responses from Jsonplaceholder using Axios.
            </Card.Text>
            <Button
              target="_blank"
              href="https://skyespirates.github.io/todo-list/"
              variant="primary"
              className=""
            >
              Visit
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Simple Input Handling</Card.Title>
            <Card.Text className="d-none d-md-block">
              Just test a simple app. It does input handling.
            </Card.Text>
            <Button
              target="_blank"
              href="https://skyespirates.github.io/testing/"
              variant="primary"
              className=""
            >
              Visit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
