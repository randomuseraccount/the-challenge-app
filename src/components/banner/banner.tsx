import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface BannerProperties {
  bannerText: string;
}

const Banner: React.FC<BannerProperties> = ({ bannerText }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 1201, alignItems: "center", backgroundColor: "#6373ce" }}
    >
      <Toolbar>
        <Typography
          variant="h2"
          noWrap
          component="div"
          color="Black"
          fontWeight="bold"
        >
          {bannerText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
