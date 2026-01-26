import { Box, Button, ButtonGroup, Grid, Stack, Typography } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WalletIcon from '@mui/icons-material/Wallet';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <Box>
    <Grid container sx={{justifyContent: 'space-between', px: 10, backgroundColor: '#57FF98', py: 3}}>
        <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <StorefrontIcon sx={{fontSize: 50}}/>
        <Box>
        <Typography variant="p" component='p' sx={{fontWeight: 700}}>
            Free Shipping
        </Typography>
        <Typography variant="p" component='p'>
            On all orders over $49.00
        </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <CurrencyExchangeIcon sx={{fontSize: 50}}/>
        <Box>
        <Typography variant="p" component='p' sx={{fontWeight: 700}}>
            07 days returns
        </Typography>
        <Typography variant="p" component='p'>
            Money back guarantee
        </Typography>
        </Box>            
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <WalletIcon sx={{fontSize: 50}}/>
        <Box>
        <Typography variant="p" component='p' sx={{fontWeight: 700}}>
            Secure checkout
        </Typography>
        <Typography variant="p" component='p'>
            Cash on Delivery Service
        </Typography>
        </Box>            
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <CardGiftcardIcon sx={{fontSize: 50}}/>
        <Box>
        <Typography variant="p" component='p' sx={{fontWeight: 700}}>
            Offer & gift here
        </Typography>
        <Typography variant="p" component='p'>
            over all of the orders
        </Typography>
        </Box>            
        </Grid>
    </Grid>

<Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: 'repeat(5, 1fr)'}, gap: 5, backgroundColor: '#CAFFCE', p: 5}}>
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        <Box sx={{width: 150}} component='img' src="https://unipharma.online/_next/image?url=%2Fmain_logo1.png&w=384&q=75"/>
        <Typography variant="p" component='p'>
            Discover Natural Wellness with Unani & Herbal Care
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <PlaceIcon/>
            <Typography variant="p" component='p'>
                Sahera Whab Mention, Housing Estate Area, West Akur Takur Para, Tangail, Bangladesh
            </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <LocalPhoneIcon/>
            <Typography variant="p" component='p'>
                09617400800
            </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <MailOutlineIcon/>
            <Typography variant="p" component='p'>
                toxinout.online@gmail.com
            </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
           <YouTubeIcon sx={{'&:hover': {color: 'green', cursor: 'pointer'}}}/>
           <FacebookIcon sx={{'&:hover': {color: 'green', cursor: 'pointer'}}}/>
           <TwitterIcon sx={{'&:hover': {color: 'green', cursor: 'pointer'}}}/>
           <LinkedInIcon sx={{'&:hover': {color: 'green', cursor: 'pointer'}}}/>
        </Box>
    </Box>

    <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography component='h5' variant="p" sx={{fontSize: 17, mb: 2}}>
            Company
        </Typography>
        <Stack direction='column' spacing={1}>
    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>about</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>blog</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>FAQ</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>location map</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>contact us</Button>
        </Stack>
    </Box>

    <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography component='h5' variant="p" sx={{fontSize: 17, mb: 2}}>
            Services
        </Typography>
        <Stack direction='column' spacing={1}>
    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Unani Medicine</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Ayurvedic Medicine</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Herbal Medicine</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Diabetic Medicine</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Sexual health</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Promotional Offers</Button>
        </Stack>
    </Box>

        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography component='h5' variant="p" sx={{fontSize: 17, mb: 2}}>
            My Account
        </Typography>
        <Stack direction='column' spacing={1}>
    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Login</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>My account</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Wishlist</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>My Orders</Button>
    
    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Shopping Cart</Button>

    <Button variant='text' to='/' component={Link} sx={{justifyContent: 'flex-start', p: 0, color: 'black', textTransform: 'capitalize', '&:hover': {color: 'green', backgroundColor: 'transparent'}}}>Compare</Button>
        </Stack>
    </Box>

</Box>

    <Box component='section' sx={{backgroundColor: '#097B35', display: 'flex', justifyContent: 'space-between', py: 1, px: {xs: 0, md: 5}, alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, fontSize: {xs: 13, md: 15}}}>
        <Typography variant="p" component='p' sx={{color: 'white'}}>
            Copyright © {year} <Typography component='span' variant="p" sx={{fontWeight: 700}}>UniPharma</Typography>. All Rights Reserved
        </Typography>
        <ButtonGroup variant='none' sx={{'& .MuiButton-root': {textTransform: 'capitalize', color: 'white', fontSize: {xs: 12, md: 15}}}}>
        <Button to='/' component={Link}>Terms & Conditions</Button>
        <Button to='/' component={Link}>Claim</Button>
        <Button to='/' component={Link}>Privacy & Policy</Button>
        </ButtonGroup>
    </Box>
    </Box>
    );
};

export default Footer;