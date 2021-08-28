import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormLogin(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      props.history.push("/dashboard");
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Username</Form.Label>
        <Form.Control type="password" placeholder="Masukan Username" required />
        <Form.Control.Feedback type="invalid">
          Mohon masukan username
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Masukan Password" required />
        <Form.Control.Feedback type="invalid">
          Mohon masukan password
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button type="submit" className="mt-3">
          Login
        </Button>
      </div>
    </Form>
  );
}
