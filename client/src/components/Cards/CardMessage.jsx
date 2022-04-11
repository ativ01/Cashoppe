import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMessage = () => {
  return (
    <Container className="mt-5 pt-5">
      <Card>
        <Card.Header as="h5">Cart</Card.Header>
        <Card.Body>
          <Card.Title>Your cart is empty</Card.Title>
          <Card.Text>Shop today's deals</Card.Text>
          <Button as={Link} to="/shop" variant="primary">
            Go shopping
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardMessage;
