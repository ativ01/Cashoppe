import React from "react";
import CardReview from "../Cards/CardReview";
import { Row, Col, Container } from "react-bootstrap";

const Testemonial = () => {
  return (
    <Container fluid="md">
      <Row xs={2} sm={2} md={2} lg={4} className="g-4 m-4">
        <Col>
          <CardReview
            src="https://randomuser.me/api/portraits/men/43.jpg"
            title="Leroy Griffin"
            content="Finally a company that knows what its doing."
            rating={5}
          />
        </Col>
        <Col>
          <CardReview
            src="https://randomuser.me/api/portraits/women/65.jpg"
            title="Anika Hayes"
            content="Great service. Very fast. Received it one day earlier. Thank you!"
            rating={4}
          />
        </Col>
        <Col>
          <CardReview
            src="https://randomuser.me/api/portraits/women/32.jpg"
            title="Nadia Perry"
            content="It's very good, the product I order was perfect."
            rating={5}
          />
        </Col>
        <Col>
          <CardReview
            src="https://randomuser.me/api/portraits/men/47.jpg"
            title="Raphael Smyth"
            content="Undoubtedly one of the best online portals in Europe."
            rating={4}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Testemonial;
