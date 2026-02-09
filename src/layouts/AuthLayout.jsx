import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
        <CssBaseline/>
        <Box>
            <Outlet/>
        </Box>
        </>
    );
};

export default AuthLayout;