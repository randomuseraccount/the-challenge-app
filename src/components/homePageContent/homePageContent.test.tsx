import { render, screen } from "@testing-library/react";
import HomePageContent from "./homePageContent";

describe("HomePageContent Component Tests Suite", () => {
  test("Check if Home Page content is as expected", () => {
    const text = "Welcome! This is the Homepage for The Challenge App.";
    render(<HomePageContent />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
