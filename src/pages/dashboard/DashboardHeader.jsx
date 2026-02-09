import { useContext } from "react";
import AuthContext from "../../auth/context/AuthContext";
import { Box, Button, Stack, Typography } from "@mui/material";

const DashboardHeader = () => {
        const { user, logOutUser } = useContext(AuthContext);
    return (
        <>
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
        </>
    );
};

export default DashboardHeader;