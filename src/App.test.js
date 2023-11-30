import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReservationForm from "./components/ReservationForm";
import Header from "./components/Header";

test("renders Header", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Check Times", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
  const testTime = [];
});
