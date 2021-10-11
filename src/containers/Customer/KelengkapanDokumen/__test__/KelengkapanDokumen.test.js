import React from "react";
import KelengkapanDokumen from "../KelengkapanDokumen";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("triggers path change", () => {
  render(
    <BrowserRouter>
      <KelengkapanDokumen
       />
    </BrowserRouter>,
  );
});
