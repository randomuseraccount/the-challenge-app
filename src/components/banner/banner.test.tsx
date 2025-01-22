import { render, screen } from "@testing-library/react";
import Banner from "./banner";

describe("Banner Component Tests", () => {
  const text = "Welcome to Our App!";

  test("Renders without crashing", () => {
    render(<Banner bannerText={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
