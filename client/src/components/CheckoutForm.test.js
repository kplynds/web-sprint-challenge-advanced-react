import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const formHeader = screen.getByText(/Checkout Form/i);
  expect(formHeader).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  // Fill out and Submit Form
  const firstNameInput = screen.getByLabelText(/First Name:/i);
  const lastNameInput = screen.getByLabelText(/Last Name:/i);
  const addressInput = screen.getByLabelText(/Address:/i);
  const cityInput = screen.getByLabelText(/City:/i);
  const stateInput = screen.getByLabelText(/State:/i);
  const zipInput = screen.getByLabelText(/Zip:/i);

  fireEvent.change(firstNameInput, {
    target: { value: "Kyle", id: firstName },
  });
  fireEvent.change(lastNameInput, { target: { value: "Lynds", id: lastName } });
  fireEvent.change(addressInput, {
    target: { value: "46 46th St.", id: address },
  });
  fireEvent.change(cityInput, { target: { value: "Los Angeles", id: city } });
  fireEvent.change(stateInput, { target: { value: "California", id: state } });
  fireEvent.change(zipInput, { target: { value: "00000", id: zip } });

  const submit = screen.getByRole("button");
  fireEvent.click(submit);

  const newSubmissionFirstName = await screen.getByText(/Kyle/i);
  expect(newSubmissionFirstName).toBeTruthy();

  const newSubmissionCity = await screen.getByText(/Los Angeles/i);
  expect(newSubmissionCity).toBeTruthy();
});
