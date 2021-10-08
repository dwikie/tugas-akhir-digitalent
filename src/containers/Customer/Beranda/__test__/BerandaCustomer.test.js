import React from "react";
import BerandaCustomer from "../BerandaCustomer";
import { render } from "@testing-library/react";

describe("Render BerandaCustomer", () => {
  it("<BerandaCustomer />", () => {
    render(<BerandaCustomer />);
  });
});