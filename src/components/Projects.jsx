import React from "react";
import { Card, Button } from "react-bootstrap";
export default function Projects() {
  return (
    <div className="container" style={{ marginBottom: "10vh" }}>
      <h1 className="text-center">My Recent Works</h1>
      <div className="row">
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{ float: "right" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{ float: "right" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "30%" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" style={{ float: "right" }}>
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
