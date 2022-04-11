import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import LoginForm from "./components/Forms/LoginForm";
import login from "./assets/login.svg";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container fluid className="mt-4 text-center">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <h1 className="login-margin">Cashoppe</h1>
        <Row>
          <Col lg={6} md={8} sm={8} xs={10} className="mx-auto">
            <img className="w-100" src={login} alt="login" />
          </Col>
          <Col
            lg={4}
            md={8}
            sm={8}
            xs={9}
            className="text-center mt-1 p-3 mx-auto"
          >
            <PersonFill className="login-icon" />
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
