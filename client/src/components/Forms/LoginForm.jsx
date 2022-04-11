import React, { useState } from "react";
import InputField from "./InputField";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import validate from "../../validations/validateLoginForm";
import axios from "axios";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const handleBlur = (e) => {
    const { name } = e.target;
    setErrors({
      ...errors,
      [name]: validate(values)[name],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valuesErrors = validate(values);
    setErrors(valuesErrors);

    if (Object.keys(valuesErrors).length === 0) {
      try {
        await axios.post("http://localhost:5000/api/users/login", values, {
          withCredentials: true,
        });
        navigate(-1);
      } catch (error) {
        setErrors({ ...errors, msg: error.response.data.errors[0].msg });
        setIsValid(true);
      }
    }
  };

  return (
    <>
      <Alert style={{ height: "56px" }} variant="danger" show={isValid}>
        <p>{errors.msg}</p>
      </Alert>
      <Form onSubmit={handleSubmit}>
        <InputField
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
        />
        <div className="d-grid">
          <Button variant="primary btn-block" type="submit">
            Login
          </Button>
        </div>
        <div className="mt-3">
          <p>New to Cashoppe?</p>
          <Link to="/signup">Create an account</Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
