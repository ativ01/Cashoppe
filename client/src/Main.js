import React, { useState, useEffect } from "react";
import Header from "./components/Navbar/Header";
import Home from "./components/Body/Home";
import Footer from "./components/Footer/Footer";

const Main = () => {
  const [cartSize, setCartSize] = useState(0);
  useEffect(() => {
    let cartSize = localStorage.getItem("cartSize");
    if (cartSize) {
      setCartSize(parseInt(cartSize));
    }
  }, []);
  return (
    <>
      <Header cartSize={cartSize} />
      <Home />
      <Footer />
    </>
  );
};

export default Main;
