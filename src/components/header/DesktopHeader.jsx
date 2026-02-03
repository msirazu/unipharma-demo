import { Box, Stack, TextField, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const DesktopHeader = () => {
    return (
        <>
            <Box component='section' sx={{bgcolor: 'white', display: 'flex', justifyContent:'space-between', height: 50, borderBottom: 1, borderColor: '#00000020', px: 2}}>
          <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Stack sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
              <MailOutlineIcon sx={{color: 'green'}}/>
            <Typography sx={{color: 'black'}} component='p'>
              test@test.com
            </Typography>
            </Stack>
            <Stack sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
              <LocationOnIcon sx={{color: 'green'}}/>
            <Typography sx={{color: 'black'}}>
              15/a, nest tower, nyc
            </Typography>
            </Stack>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <YouTubeIcon sx={{color: 'black', ':hover': {color: 'green', cursor: 'pointer'}}}/>
            <FacebookIcon sx={{color: 'black', ':hover': {color: 'green', cursor: 'pointer'}}}/>
            <TwitterIcon sx={{color: 'black', ':hover': {color: 'green', cursor: 'pointer'}}}/>
            <LinkedInIcon sx={{color: 'black', ':hover': {color: 'green', cursor: 'pointer'}}}/>
          </Box>
        </Box>

        <Box component='section' sx={{height: 80, backgroundColor: '#dddddd70', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2}}>
            <Box to='/' component={Link}>
                <Box sx={{width: 150}} component='img' src='https://unipharma.online/_next/image?url=%2Fmain_logo1.png&w=256&q=75'/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <LocalPhoneIcon sx={{color: 'green'}}/>
                <Box>
                    <Typography variant='p' component='p'>
                        Call Now
                    </Typography>
                    <Typography variant='p' component='p'>
                        +880123456789
                    </Typography>
                </Box>
            </Box>
            <Box>
                <TextField variant='outlined' placeholder='search our store' sx={{'& .MuiOutlinedInput-root': {borderRadius: 10, px: 2, width: 350, boxShadow: 1}}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <Box>
                <ShoppingCartIcon/>
                <Typography variant='p' component='p' sx={{textTransform: 'capitalize'}}>
                    cart
                </Typography>
                </Box>
                <PermIdentityIcon/>
            </Box>
        </Box>
        </>
    );
};

export default DesktopHeader;