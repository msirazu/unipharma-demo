import { Box, Button, CssBaseline, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const DashboardRegister = () => {
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const {createUser, setUser, updateUser} = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            updateUser({displayName: name, photoURL: photo}).then(() => {
            setUser({...newUser, displayName: name, photoURL: photo});
            setMessage('user created success');
            e.target.name.value = '';
            e.target.photo.value = '';
            e.target.email.value = '';
            e.target.password.value = '';
            }).catch((error) => {
                console.log(error)
                setUser(newUser);
            })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage);
            console.log(errorCode)
        })
        setErrorMsg('');
        setMessage('');
    }
    return (
        <>
    <CssBaseline/>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#dddddd'}}>
        <Box sx={{width: '350px', backgroundColor: '#ffffff', maxHeight: '600px', p: 2, borderRadius: '15px', mx: 3}}>
        <Box sx={{backgroundColor: '#2563EB', borderRadius: '5px', p: 3}}>
        <Typography sx={{color: '#ffffff', fontWeight: 400, fontSize: '15px', textAlign: 'center'}} component='h2' variant='h6'>
Register your account
        </Typography>
        </Box><form onSubmit={handleRegister}>
        <Stack spacing={2} sx={{pt: 3}}>
        <TextField type="name" label='Name' name='name' placeholder="enter your name" required/>
        <TextField label='Photo URL' name='photo' placeholder="enter your picture link"/>
        <TextField type="email" name='email' label='Email' placeholder="enter your email" required/>
        <TextField type="password" name='password' label="Password" placeholder="enter your password" required/>
        <Button type="submit" sx={{height: '50px'}} variant="contained">register</Button>
        </Stack></form>
        <Stack justifyContent='space-between' spacing={2} direction='row'>
        <Box sx={{textDecoration: 'none'}} to='/' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '13px'}}>Back to Home</Typography>
        </Box>
        <Box sx={{textDecoration: 'none'}} to='/dashboard' component={Link}>
        <Typography component='p' variant='p' sx={{textAlign: 'center', mt: '10px', fontSize: '13px'}}>Back to Dashboard</Typography>
        </Box>
        </Stack>
        <Box sx={{mt: 2}}>
        {message && message}
        {errorMsg && errorMsg}
        </Box>
        </Box>
    </Box>
    </>
    );
};

export default DashboardRegister;