import { Box } from "@mui/material";
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
            <HeroBanner/>
        </Box>
    );
};

export default Home;