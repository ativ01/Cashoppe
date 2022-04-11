import React from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import ContactUsForm from "../Forms/ContactUsForm";

const ContactUs = () => {
  return (
    <Container fluid className="text-center contactus-section">
      <Row>
        <Col lg={5} md={5} sm={8} xs={9} className="mx-auto">
          <h3 className="my-3 text-white">Send us a message</h3>
          <ContactUsForm />
        </Col>
        <Col lg={5} md={5} sm={12} xs={12} className="text-center m-auto">
          <ListGroup as="ul" className="mb-3">
            <ListGroup.Item as="li" active>
              Contact Number
            </ListGroup.Item>
            <ListGroup.Item as="li">+356 99874126</ListGroup.Item>
            <ListGroup.Item as="li" active>
              Address
            </ListGroup.Item>
            <ListGroup.Item as="li">
              67, Cashoppe Ltd, Triq Howard, Sliema
            </ListGroup.Item>
            <ListGroup.Item as="li" active>
              Facebook page
            </ListGroup.Item>
            <ListGroup.Item as="li">http:/facebook.com/cashoppe</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
