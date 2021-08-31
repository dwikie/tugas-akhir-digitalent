import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { authenticate } from "../../configs/auth";

export default function FormLogin(props) {
  const [validated, setValidated] = useState(false);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    console.log(1);
    return () => console.log(2);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setValidated(true);
    setRequest(true);

    const form = e.currentTarget;
    const username = e.target.querySelector("[name=username]").value;
    const password = e.target.querySelector("[name=password]").value;

    if (form.checkValidity() === true) {
      try {
        await authenticate({ username, password });
        props.history.push("/dashboard");
      } catch (err) {
        setRequest(false);
        console.error(err);
      }
    } else setRequest(false);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Masukan Username"
          required
        />
        <Form.Control.Feedback type="invalid">
          Mohon masukan username
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Masukan Password"
          required
        />
        <Form.Control.Feedback type="invalid">
          Mohon masukan password
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button type="submit" className="mt-3" disabled={request}>
          Login
          <Spinner
            className={`ms-2 ${request ? "" : "visually-hidden"}`}
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
      </div>
    </Form>
  );
}
