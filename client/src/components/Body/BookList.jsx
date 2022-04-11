import React from "react";
import CardItem from "../Cards/CardItem";
import { Row, Col, Container } from "react-bootstrap";

const BookList = ({ data, handleAddBook }) => {
  return (
    <Container fluid="md">
      <Row xs={2} sm={3} md={3} lg={4} className="g-4 mb-4">
        {data &&
          data.map((book, index) => (
            <Col key={index}>
              <CardItem
                isbn={book.isbn}
                title={book.title}
                author={book.author}
                imageUrl={book.imageUrl}
                price={book.price}
                onClick={() => handleAddBook(book._id, book.price)}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
