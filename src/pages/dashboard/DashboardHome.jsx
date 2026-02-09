import { Box, Button, Stack, Typography } from "@mui/material";
import DesignOne from "../../components/coming-soon/DesignOne";
import { useContext } from "react";
import AuthContext from "../../auth/context/AuthContext";

const DashboardHome = () => {
    const { user, logOutUser } = useContext(AuthContext);
    return (
        <Box>
            <Stack direction='row' justifyContent='space-around' alignItems='center'>
            <Typography>
            email: {user.email}
            </Typography>
            <Typography>
            name: {user.displayName}
            </Typography>
            <Box component='img' src={user.photoURL}/>
            {user && <Button onClick={() => logOutUser()} variant="contained">signout</Button>} 
            </Stack>
            <DesignOne/>
        </Box>
    );
};

export default DashboardHome;