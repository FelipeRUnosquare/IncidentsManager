import { fireEvent, render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";
import Incidents from "../pages/home/index";

jest.mock("next/router", () => require("next-router-mock"));

describe("All incidents Page", () => {
  test("Render list", async () => {
    render(<Incidents />);
    const firstItem = await screen.findByText("Wilt Matuska");
    expect(firstItem).toBeInTheDocument();
  });
  test("Pagination Button work", async () => {
    render(<Incidents />);
    const buttonSecondPost = await screen.findByLabelText("Page 2");
    userEvent.click(buttonSecondPost);
    const secondPostTitle = await screen.findByText(/Chaim Gisburn/i);
    expect(secondPostTitle).toBeInTheDocument();
  });
});
