import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TasksPage from "./tasksPage";
import { mockedTasksApi } from "./__mocks__/mockedEndpointResponse";

global.fetch = jest.fn();

describe("TasksPage Component Tests Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Check if the task list is successfully rendered", async () => {
    mockedTasksApi.setErrorState(false);
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockedTasksApi.getTasks()),
      } as Response);
    });

    render(<TasksPage />);

    expect(screen.getByText(/Retrieving Task List/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    });
  });

  test("Check if errors are handled when getting tasks", async () => {
    mockedTasksApi.setErrorState(true);
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.reject(new Error("Failed to fetch tasks"));
    });

    render(<TasksPage />);

    expect(screen.getByText(/Retrieving Task List/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText(/Error: Failed to fetch tasks/i),
      ).toBeInTheDocument();
    });
  });
});
