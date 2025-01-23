import { render, screen } from "@testing-library/react";
import Banner from "./banner";

describe("Banner Component Tests Suit", () => {
  const text = "Welcome to Our App!";

  test("Renders the banner and displays the correct text", () => {
    render(<Banner bannerText={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
