import React from "react";
import { Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const CardReview = ({ src, title, content, rating }) => {
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img
        variant="top"
        className="rounded-circle card-review-img"
        src={src}
      />
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <div className="text-center mb-3">
        {[...Array(5)].map((value, index) => {
          let className = "star";
          if (index + 1 <= rating) className += " star-checked";

          return <StarFill key={index} className={className} />;
        })}
      </div>
    </Card>
  );
};

export default CardReview;
