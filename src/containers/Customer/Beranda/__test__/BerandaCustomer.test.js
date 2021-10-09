import React from "react";
import BerandaCustomer from "../BerandaCustomer";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("triggers path change", () => {
  render(
    <BrowserRouter>
      <BerandaCustomer />
    </BrowserRouter>,
  );
});
