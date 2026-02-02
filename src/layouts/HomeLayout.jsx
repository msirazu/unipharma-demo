import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const HomeLayout = () => {
  return (
    <Box>
      <Box component="header">
        <Header />
      </Box>
      <Box component="main">
          <Outlet />
      </Box>
      <Box component="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default HomeLayout;
