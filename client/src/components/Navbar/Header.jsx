import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import axios from "axios";
import { PersonFill } from "react-bootstrap-icons";
import { Cart2 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Header = ({ cartSize }) => {
  const [name, setName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = Cookies.get("isLogged");
    if (isLogged) {
      setIsAuth(isLogged);
      getUserName();
    }
  }, []);

  const getUserName = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/users/", {
        withCredentials: true,
      });
      setName(result.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/api/users/logout", {
      withCredentials: true,
    });
    setIsAuth(false);
    setName("");
    navigate("/");
  };

  const authNavButtons = () => {
    if (isAuth) {
      return (
        <>
          <Navbar.Brand>
            <PersonFill className="mx-2 navbar-icon" />
            {name}
          </Navbar.Brand>
          <Button as={Link} to="/cart" variant="primary">
            <Cart2 className="shopping-cart-icon" />
            <Badge bg="secondary" className="badge" pill>
              {cartSize}
            </Badge>
          </Button>
          <Button onClick={handleLogout} variant="light" className="mx-2">
            Logout
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button as={Link} to="/login" variant="light" className="mx-2">
            Login
          </Button>
          <Button
            as={Link}
            to="/signup"
            variant="outline-light"
            className="mx-2"
          >
            Signup
          </Button>
        </>
      );
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      variant="dark"
      fixed="top"
      className="p-3"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="Shopping bag"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2 "
            />
            {""}
          </Link>
          Cashoppe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <div className="mt-1">{authNavButtons()}</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
