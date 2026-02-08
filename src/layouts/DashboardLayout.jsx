import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <Box>
            <Box component='header'>

            </Box>
            <Box component='main'>
                <Outlet/>
            </Box>
            <Box component='footer'>

            </Box>
        </Box>
    );
};

export default DashboardLayout;