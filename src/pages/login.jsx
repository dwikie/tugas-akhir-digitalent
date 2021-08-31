import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import FormLogin from "../components/login/form-login";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Login(props) {
  return (
    <main className="d-flex vh-100">
      <Card
        body
        className="m-auto col-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 py-2"
      >
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip id={`tooltip-info`} className="p-2">
              Username: any <br />
              Password: any
            </Tooltip>
          }
        >
          <Button className="btn d-flex align-items-center ms-auto bg-transparent text-dark border-0">
            <FaRegQuestionCircle />
          </Button>
        </OverlayTrigger>
        <h1 className="text-center mb-4">Home Loans</h1>
        <FormLogin {...props} />
      </Card>
    </main>
  );
}
