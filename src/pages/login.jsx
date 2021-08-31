import React from "react";
import { Card } from "react-bootstrap";
import FormLogin from "../components/login/form-login";

export default function Login(props) {
  return (
    <main className="d-flex vh-100">
      <Card
        body
        className="m-auto col-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-2"
      >
        <h1 className="text-center mb-4">Home Loans</h1>
        <FormLogin {...props} />
      </Card>
    </main>
  );
}
