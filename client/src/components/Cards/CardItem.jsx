import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const CardItem = ({ isbn, author, price, title, imageUrl, onClick }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }} className="mx-1">
      <Card.Img variant="top" src={imageUrl} className="card-img" />
      <ListGroup variant="flush">
        <ListGroup.Item>ISBN: {isbn}</ListGroup.Item>
        <ListGroup.Item>Author: {author}</ListGroup.Item>
        <ListGroup.Item>Price: €{price}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Button onClick={onClick} variant="primary" className="mx-auto mb-3">
        Add to cart
      </Button>
    </Card>
  );
};

export default CardItem;
