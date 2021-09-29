import { render, screen } from "@testing-library/react";
import App from "./App";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Petugas/i);
  expect(linkElement).toBeInTheDocument();
});
