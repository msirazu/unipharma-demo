import { Box, Button, Container, Typography } from "@mui/material";
import bannerImg from '../../assets/images/Banner-Compress-6.jpg'

const HeroBanner = () => {
    return (
            <Box sx={{width: '100%', backgroundImage: `url(${bannerImg})`, height: '600px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', alignItems: 'center'}}>
                <Box sx={{mx: {xs: 2, md: 5}}}>
                <Typography sx={{fontSize: {xs: '20px', md: '30px'}}} variant="h6" component='h5'>
                   Explore UPTO 30% OFF 
                </Typography>
                <Typography variant="h3" component='h2' sx={{color: '#097B35', fontWeight: 600, my: 2, fontFamily: 'Playfair Display, serif', fontSize: {xs: '25px', md: '50px'}}}>
                    Discover the Power of Unani,<br/>Ayurvedic & Herbal Medicine<br/> for Natural Healing
                </Typography>
                <Button sx={{px: 5, textTransform: 'capitalize', py: 1}} variant="contained" color="success">shop now</Button>
                </Box>
            </Box>
    );
};

export default HeroBanner;