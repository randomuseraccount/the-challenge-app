import { render, screen } from "@testing-library/react";
import MissingPage from "./missingPage";

describe("MissingPage Component Tests Suite", () => {
  test("Check if the Page Not found content is as expected", () => {
    const text = "The page you are looking for does not exist!";
    render(<MissingPage />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
