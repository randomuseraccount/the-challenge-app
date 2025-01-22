import React from "react";
import { Box, Typography } from "@mui/material";
import "./banner.scss";

interface BannerProperties {
  bannerText: string;
}

const Banner: React.FC<BannerProperties> = ({ bannerText }) => {
  return (
    <Box className="banner">
      <Typography variant="h1" className="banner-typography">
        {bannerText}
      </Typography>
    </Box>
  );
};

export default Banner;
