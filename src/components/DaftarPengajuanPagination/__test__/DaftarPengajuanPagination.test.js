import React from "react";
import DaftarPengajuanPagination from "../DaftarPengajuanPagination";
import { render } from "@testing-library/react";

describe("Render Pagination", () => {
  it("<DaftarPengajuanPagination />", () => {
    render(<DaftarPengajuanPagination />);
  });
});
