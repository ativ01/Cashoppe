import React, { useState, useEffect } from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import CartList from "./components/Body/CartList";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardMessage from "./components/Cards/CardMessage";

toast.configure();

const Cart = () => {
  const [data, setData] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    getItems();

    let cartSize = localStorage.getItem("cartSize");
    if (cartSize) {
      setCartSize(parseInt(cartSize));
    }
  }, [cartSize]);

  const getItems = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/cart/", {
        withCredentials: true,
      });
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const notify = (message) =>
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });

  const handleDelete = async (productId, quantity) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`, {
        withCredentials: true,
      });
      setCartSize(cartSize - quantity);
      localStorage.setItem("cartSize", cartSize - quantity);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = async (productId) => {
    console.log("");
    try {
      await axios.put(
        `http://localhost:5000/api/cart/${productId}/increment`,
        {},
        {
          withCredentials: true,
        }
      );
      setCartSize(cartSize + 1);
      localStorage.setItem("cartSize", cartSize + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDecrement = async (productId) => {
    try {
      await axios.put(
        `http://localhost:5000/api/cart/${productId}/decrement`,
        {},
        {
          withCredentials: true,
        }
      );

      setCartSize(cartSize - 1);
      localStorage.setItem("cartSize", cartSize - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = async () => {
    try {
      await axios.delete("http://localhost:5000/api/cart/", {
        withCredentials: true,
      });
      setCartSize(0);
      localStorage.setItem("cartSize", 0);
      notify("Your order has been processed.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header cartSize={cartSize} />
      {cartSize < 1 ? (
        <CardMessage />
      ) : (
        <>
          <h1 className="mt-5 p-5 text-center">Cart items</h1>
          <CartList
            data={data}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onCheckout={handleCheckout}
          />
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;
