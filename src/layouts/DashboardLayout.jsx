import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../pages/dashboard/DashboardHeader";
import DashboardSidebar from "../pages/dashboard/DashboardSidebar";

const DashboardLayout = () => {
    return (
        <>
            <Box component='section' sx={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)'}}>
                <Box component='aside' sx={{gridColumn: 'span 2'}}>
                <DashboardSidebar/>
                </Box>
                <Box component='main' sx={{gridColumn: 'span 10'}}> 
                <DashboardHeader/>
                <Outlet/>
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;