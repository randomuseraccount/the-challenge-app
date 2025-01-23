import { BrowserRouter, Routes, Route } from "react-router";
import { CssBaseline, Drawer, Toolbar, Box } from "@mui/material";
import Banner from "./components/banner/banner";
import PageNavigator from "./components/pageNavigator/pageNavigator";
import HomePageContent from "./components/homePageContent/homePageContent";
import TasksPage from "./components/tasksPage/tasksPage";
import MissingPage from "./components/missingPage/missingPage";

const drawerWidth = 240;

function App() {
  return (
    <BrowserRouter basename="/">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Banner bannerText={"The Challenge App"} />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            marginTop: "64px",
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <PageNavigator />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePageContent />}></Route>
            <Route path="tasks" element={<TasksPage />}></Route>
            <Route path="*" element={<MissingPage />}></Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
