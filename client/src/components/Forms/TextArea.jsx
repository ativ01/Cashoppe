import React from "react";
import { Form } from "react-bootstrap";

const TextArea = ({ rows, placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control as="textarea" rows={rows} placeholder={placeholder} />
    </Form.Group>
  );
};

export default TextArea;
