import { Link } from "react-router";
import { List, ListItem, Button } from "@mui/material";

export default function PageNavigator() {
  const buttonStyle = {
    justifyContent: "center",
    color: "inherit",
    textTransform: "none",
    padding: "20px",
    fontWeight: "bold",
    border: "1px solid",
    borderColor: "primary.main",
    "&:hover": {
      borderColor: "primary.dark",
    },
  };

  return (
    <List disablePadding>
      <ListItem component={Link} to="/" disablePadding>
        <Button fullWidth variant="text" color="primary" sx={buttonStyle}>
          Home
        </Button>
      </ListItem>
      <ListItem component={Link} to="/tasks" disablePadding>
        <Button fullWidth variant="text" color="primary" sx={buttonStyle}>
          Tasks
        </Button>
      </ListItem>
    </List>
  );
}
