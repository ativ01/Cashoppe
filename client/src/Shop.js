import React, { useState, useEffect } from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import BookList from "./components/Body/BookList";
import { Container } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

toast.configure();
const Shop = () => {
  const [data, setData] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const navigate = useNavigate();

  const notify = (message) =>
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

  useEffect(() => {
    getBooks();

    let cartSize = localStorage.getItem("cartSize");
    if (cartSize) {
      setCartSize(parseInt(cartSize));
    }
  }, []);

  const getBooks = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/books/");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBook = async (id, price) => {
    const isLogged = Cookies.get("isLogged");

    if (!isLogged) {
      navigate("/login");
    } else {
      try {
        await axios.post(
          "http://localhost:5000/api/cart",
          { productId: id, price: price },
          {
            withCredentials: true,
          }
        );

        let quantity = cartSize + 1;

        setCartSize(quantity);
        localStorage.setItem("cartSize", quantity);
        notify("The book has been added.");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Header cartSize={cartSize} />
      <Container>
        <h1 className="mt-5 p-5 text-center">Books</h1>
        <BookList data={data} handleAddBook={handleAddBook} />
      </Container>
      <Footer />
    </>
  );
};

export default Shop;
