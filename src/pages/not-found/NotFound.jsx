import { Box, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Typography variant="h4" component='h4'>
                not found
            </Typography>
        </Box>
        </>
    );
};

export default NotFound;