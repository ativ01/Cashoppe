import React from "react";
import InputField from "./InputField";
import { Form, Button } from "react-bootstrap";
import TextArea from "./TextArea";

const ContactUsFrom = () => {
  return (
    <Form className="my-3">
      <InputField type="text" placeholder="Enter name" />
      <InputField type="email" placeholder="Enter email" />
      <InputField type="text" placeholder="Enter phone number" />
      <TextArea rows={3} placeholder="Enter message" />
      <div className="mx-auto">
        <Button
          variant="outline-light btn-block"
          style={{ width: "200px" }}
          type="submit"
        >
          Send
        </Button>
      </div>
    </Form>
  );
};

export default ContactUsFrom;
