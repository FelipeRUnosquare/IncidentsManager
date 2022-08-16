import { render, screen } from "./test-utils";
import Home from "../pages/home/index";

describe.skip("Home Component", () => {
  test("Render Menu", async () => {
    render(<Home />);
    const text = await screen.findByText("All Incidents");
    expect(text).toBeInTheDocument();
  });
});
