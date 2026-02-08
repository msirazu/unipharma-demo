import { Box, Button, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardLogin = () => {
    return (
    <>
    <CssBaseline/>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#dddddd'}}>
        <Box sx={{width: '350px', backgroundColor: '#ffffff', height: '450px', p: 2, borderRadius: '15px'}}>
        <Box sx={{backgroundColor: '#2563EB', borderRadius: '5px', p: 5}}>
        <Typography sx={{color: '#ffffff', fontWeight: 400, fontSize: '15px', textAlign: 'center'}} component='h2' variant='h6'>
Welcome back! Please sign in to your account
        </Typography>
        </Box>
        <Stack spacing={2} sx={{pt: 3}}>
        <TextField label='Email' placeholder="enter your email"/>
        <TextField label="Password" placeholder="enter your password"/>
        <Box sx={{textDecoration: 'none', '&:hover': {textDecoration: 'underline'}}} to='/' component={Link}>
        <Typography sx={{fontSize: '14px', textAlign: 'right'}} component='p' variant='p'>Forgot your password?</Typography>
        </Box>
        <Button sx={{height: '50px'}} variant="contained">Sign In</Button>
        </Stack>
        <Stack justifyContent='space-between' spacing={2} direction='row'>
        <Box sx={{textDecoration: 'none'}} to='/' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '15px'}}>Back to Home</Typography>
        </Box>
        <Box sx={{textDecoration: 'none'}} to='/dashboard' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '15px'}}>Back to Dashboard</Typography>
        </Box>
        </Stack>
        </Box>
    </Box>
    </>
    );
};

export default DashboardLogin;