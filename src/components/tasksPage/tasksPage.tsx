import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import incompleteTaskImage from "../../assets/x.png";
import completeTaskImage from "../../assets/tick.png";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const TasksPage: React.FC = () => {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const endpoint = "http://localhost:3008/api/tasks/";

  const getTasks = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = (await response.json()) as Task[];
      setData(jsonData);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error has occurred while getting the Task List",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks().catch((err) => {
      setError(
        err instanceof Error
          ? err.message
          : "An error has occurred while getting the Task List",
      );
    });
  }, [endpoint]);

  if (loading) {
    return (
      <Typography variant="h3" align="justify">
        Retrieving Task List...{" "}
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="h3" align="justify">
        Error: {error}
      </Typography>
    );
  }

  return (
    <React.Fragment key="task-list">
      <Typography variant="h3" align="justify">
        Task List
      </Typography>
      <List sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem
              key={item.id}
              alignItems="flex-start"
              sx={{ bgcolor: "#bbc4f9", borderRadius: 1 }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={item.completed ? "C" : "I"}
                  src={item.completed ? completeTaskImage : incompleteTaskImage}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.id}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default TasksPage;
