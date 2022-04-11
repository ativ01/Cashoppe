import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 photo"
          src="/images/book.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button as={Link} to="/shop" variant="primary" className="m-2">
            Shop now
          </Button>
          <h3>Books Discount</h3>
          <p>Get 20 % discount on selected books</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 photo"
          src="/images/books.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Button as={Link} to="/shop" variant="primary" className="m-2">
            Shop now
          </Button>
          <h3>New Customer Offer</h3>
          <p>Get up to €50 in credits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 photo"
          src="/images/books2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <Button as={Link} to="/shop" variant="primary" className="m-2">
            Shop now
          </Button>
          <h3>Vintage Books Offer</h3>
          <p>Purchase 2 books released before 2010 and get a third for free</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
