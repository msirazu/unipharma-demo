import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WalletIcon from '@mui/icons-material/Wallet';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from "react-router-dom";

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
    <Box component='section'>

    </Box>
    <Box component='section' sx={{backgroundColor: '#097B35', display: 'flex', justifyContent: 'space-between', py: 1, px: {xs: 0, md: 5}, alignItems: 'center', flexDirection: {xs: 'column', md: 'row'}, fontSize: {xs: 12, md: 15}}}>
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