import { render, screen } from "./test-utils";
import Home from "../pages/home/index";

describe("Home Component", () => {
  test("Render Menu First option", async () => {
    render(<Home />);
    const text = await screen.findByText("All Incidents");
    expect(text).toBeInTheDocument();
  });
});
