import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/index";
import "@testing-library/jest-dom";

describe("Login Form", () => {
  test("User input button works", async () => {
    render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "email@email.com" } });
    expect(loginInput.value).toBe("email@email.com");
  });

  test.skip("Spinner appers after click button works", async () => {
    const { container } = render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "email@email.com" } });
    const okButton = screen.getByText("Login");
    userEvent.click(okButton);
    const spinner = container.getElementsByClassName("spinner");
    await waitFor(() => expect(spinner).toBeInTheDocument());
  });

  test("Form validation Works", async () => {
    render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "" } });
    const okButton = screen.getByRole("button");
    userEvent.click(okButton);
    const invalidLabel = await screen.findByText(/Please enter a valid email/i);
    await waitFor(() => expect(invalidLabel).toBeInTheDocument());
  });
});
