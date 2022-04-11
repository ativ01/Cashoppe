import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonBadge } from "react-bootstrap-icons";
import SignUpForm from "./components/Forms/SignUpForm";
import signup from "./assets/signup.svg";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Container fluid className="mt-4 text-center">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <h1 className="signup-margin">Cashoppe</h1>
        <Row>
          <Col lg={4} md={4} sm={8} xs={9} className="text-center p-3 mx-auto">
            <PersonBadge className="signup-icon" />
            <SignUpForm />
          </Col>
          <Col lg={6} md={6} sm={8} xs={10} className="mx-auto">
            <img className="w-100" src={signup} alt="login" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
