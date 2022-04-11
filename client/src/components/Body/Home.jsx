import React from "react";
import Banner from "./Banner";
import Testemonial from "./Testemonial";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Banner />
      <h2 className="text-center bg-primary text-white py-2">Testimonials</h2>
      <Testemonial />
      <h2 className="text-center bg-primary text-white py-2 m-0">Contact Us</h2>
      <ContactUs />
    </>
  );
};

export default Home;
