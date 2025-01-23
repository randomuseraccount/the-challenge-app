interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const mockedTasks: Task[] = [
  { id: 0, text: "Task", completed: false },
  { id: 1, text: "Task 1", completed: false },
  { id: 2, text: "Task 2", completed: false },
];

class mockedEndpointResponse {
  private shouldReturnError: boolean = false;

  public setErrorState(state: boolean) {
    this.shouldReturnError = state;
  }

  public getTasks(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
      if (this.shouldReturnError) {
        reject(new Error("Failed to get tasks"));
      } else {
        resolve(mockedTasks);
      }
    });
  }
}

const mockedTasksApi = new mockedEndpointResponse();

export { mockedTasksApi };
