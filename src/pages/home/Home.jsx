import { Box, Typography } from "@mui/material";
import HeroBanner from "../../components/header/HeroBanner";
import { useLoaderData } from "react-router-dom";
import ProductsHome from "../products/ProductsHome";

const Home = () => {
    const allProducts = useLoaderData();
    return (
        <Box>
            <Box component='section'>
            <HeroBanner/>
            </Box>
            <Box component='section' sx={{mx: {md: 10, xs: 2}, my: {md: 5, xs: 2}}}>
                <Box sx={{textAlign: 'center'}}>
            <Typography sx={{backgroundColor: '#ECFDF5', display: 'inline-block', px: 2, py: 1, borderRadius: '25px', color: '#007A55', fontWeight: 600}} variant="p" component='p'>
                Trusted Ayurvedic Remedies
            </Typography>
            <Typography sx={{my: 3, fontWeight: 700, fontSize: {xs: '2rem', md: '3.5rem'}}} variant="h3" component='h2'>
                Our Medicine Hub
            </Typography>
            <Typography sx={{maxWidth: '650px', textAlign: 'center', mx: 'auto'}} variant="p" component='p'>
                Discover physician-approved natural formulas tailored for modern Bangladeshi lifestyles. Every product is vetted for purity, safety, and fast relief so you can shop with complete confidence.
            </Typography>
                </Box>
            </Box>

            <Box component='section' sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: {md: 'repeat(4, 1fr)', xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)'}, gap: 2, mx: 2, my: {xs: 0, md: 2}, maxWidth: '1400px'}}>
                {allProducts.map(product => <ProductsHome key={product.id} product={product}/>)}
            </Box>
            </Box>

        </Box>
    );
};

export default Home;