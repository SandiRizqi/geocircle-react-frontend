import React from "react";
import { Card, Col } from "react-bootstrap";

function CardComponent(props) {
  return (
    <Col md={3} className="mt-3">
      <Card>
        <Card.Img variant="top" src={props.imgUrl} alt="image" width="150" height="150" />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <p>{props.Content}</p>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.Time}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default CardComponent;
