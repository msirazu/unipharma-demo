import { Box, Button, ButtonGroup, CssBaseline, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <>
        <CssBaseline/>
        <Box sx={{backgroundColor: '#dddddd', height: '100vh', p: 2}}>
            <Box>
            <Typography sx={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 700}}>
                dashboard logo
            </Typography>
            </Box>
            <ButtonGroup sx={{display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            <Button variant="text" sx={{textDecoration: 'none'}} to='/dashboard' component={Link}>dashboard</Button>
            <Button variant="text" to='/dashboard/add-product' component={Link}>
                add product
            </Button>
            <Button variant="text" to='/dashboard' component={Link}>
                edit product
            </Button>
            <Button variant="text" to='/dashboard/manage-product' component={Link}>
                manage product
            </Button>
            </ButtonGroup>
        </Box>
        </>
    );
};

export default DashboardSidebar;