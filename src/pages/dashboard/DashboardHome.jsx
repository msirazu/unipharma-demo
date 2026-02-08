import { Box, Button } from "@mui/material";
import DesignOne from "../../components/coming-soon/DesignOne";
import { useContext } from "react";
import AuthContext from "../../auth/context/AuthContext";

const DashboardHome = () => {
    const { user, logOutUser } = useContext(AuthContext);
    return (
        <Box>
            {user.email}
            {user && <Button onClick={() => logOutUser()} variant="contained">signout</Button>}
            <DesignOne/>
        </Box>
    );
};

export default DashboardHome;