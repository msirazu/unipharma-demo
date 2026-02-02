import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HeroBanner from "../../components/header/HeroBanner";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const allData = async() => {
            const dataPromise = await fetch('/data/products-data.json');
            const dataRes = await dataPromise.json();
            return setProducts(dataRes);
        }
        allData();
    }, [])
    console.log(products);
    return (
        <Box>
            <Box component='section'>
            <HeroBanner/>
            </Box>
            <Box component='section' sx={{mx: 10, my: 5}}>
                <Box sx={{textAlign: 'center'}}>
            <Typography sx={{backgroundColor: '#ECFDF5', display: 'inline-block', px: 2, py: 1, borderRadius: '25px', color: '#007A55', fontWeight: 600}} variant="p" component='p'>
                Trusted Ayurvedic Remedies
            </Typography>
            <Typography sx={{my: 3, fontWeight: 700}} variant="h3" component='h2'>
                Our Medicine Hub
            </Typography>
            <Typography sx={{maxWidth: '650px', textAlign: 'center', mx: 'auto'}} variant="p" component='p'>
                Discover physician-approved natural formulas tailored for modern Bangladeshi lifestyles. Every product is vetted for purity, safety, and fast relief so you can shop with complete confidence.
            </Typography>
                </Box>
            </Box>

            <Box component='section'>

            </Box>

        </Box>
    );
};

export default Home;