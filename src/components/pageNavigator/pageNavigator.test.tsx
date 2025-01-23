import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageNavigator from "./pageNavigator";

describe("PageNavigator Component Tests Suite", () => {
  test("Check if home button is rendered", () => {
    render(
      <MemoryRouter>
        <PageNavigator />
      </MemoryRouter>,
    );

    const homeButton = screen.getByRole("button", { name: /Home/i });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton.closest("a")).toHaveAttribute("href", "/");
  });

  test("Check if tasks button is rendered", () => {
    render(
      <MemoryRouter>
        <PageNavigator />
      </MemoryRouter>,
    );

    const tasksButton = screen.getByRole("button", { name: /Tasks/i });
    expect(tasksButton).toBeInTheDocument();

    expect(tasksButton.closest("a")).toHaveAttribute("href", "/tasks");
  });
});
