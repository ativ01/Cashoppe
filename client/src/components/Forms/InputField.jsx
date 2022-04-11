import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  error,
  onBlur,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
};

export default InputField;
