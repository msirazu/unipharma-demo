import { Box, Button, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const DashboardLogin = () => {
    const { logInUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
        .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : '/'}`);
  })
  .catch((error) => {
    console.log(error)
  });
    }
    return (
    <>
    <CssBaseline/>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#dddddd'}}>
        <Box sx={{width: '350px', backgroundColor: '#ffffff', maxHeight: '500px', p: 2, borderRadius: '15px', mx: 3}}>
        <Box sx={{backgroundColor: '#2563EB', borderRadius: '5px', p: 5}}>
        <Typography sx={{color: '#ffffff', fontWeight: 400, fontSize: '15px', textAlign: 'center'}} component='h2' variant='h6'>
Welcome back! Please sign in to your account
        </Typography>
        </Box>
        <form onSubmit={handleLogin}>
        <Stack spacing={2} sx={{pt: 3}}>
        <TextField name='email' type='email' label='Email' placeholder="enter your email"/>
        <TextField name='password' type='password' label="Password" placeholder="enter your password"/>
        <Stack justifyContent='space-between' spacing={2} direction='row'>
        <Box sx={{textDecoration: 'none'}} to='/dashboard/auth/register' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', fontSize: '13px', textTransform: 'capitalize'}}>register</Typography>
        </Box>
        <Box sx={{textDecoration: 'none'}} to='' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', fontSize: '13px', textTransform: 'capitalize'}}>forgot password</Typography>
        </Box>
        </Stack>
        <Button type="submit" sx={{height: '50px'}} variant="contained">Log In</Button>
        </Stack>
        </form>
        <Stack justifyContent='space-between' spacing={2} direction='row'>
        <Box sx={{textDecoration: 'none'}} to='/' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '13px'}}>Back to Home</Typography>
        </Box>
        <Box sx={{textDecoration: 'none'}} to='/dashboard' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '13px'}}>Back to Dashboard</Typography>
        </Box>
        </Stack>
        </Box>
    </Box>
    </>
    );
};

export default DashboardLogin;