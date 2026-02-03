import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import DataContext from "../../auth/context/DataContext";
import { useParams } from "react-router-dom";
import CircularColorLoading from "../../components/loading/CircularColorLoading";

const ProductDetails = () => {
    const { products, loading} = useContext(DataContext);
    const {Id} = useParams();
    const idNum = Number(Id);

    if (loading) {
        return <CircularColorLoading/>
    }

    const singleProduct = products.find(p => p.id === idNum);
    
    if (!singleProduct) {
    return <p>Product not found</p>;
    }

    const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id } = singleProduct;

    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Container sx={{maxWidth: '1400px', display: 'grid', gridTemplateColumns: {md: 'repeat(3, 1fr)', xs: 'repeat(1, 1fr)'}, gap: 3, mx: {md: 0, xs: 0}, my: {md: 2, xs: 2}}}>
            <Box sx={{gridColumn: {md: 'span 1', xs: 'span 3'}, border: '1px solid #dddddd', borderRadius: 2}}>
                <Box sx={{width: '100%'}} component='img' src={imageUrl}/>
            </Box>
            <Box sx={{gridColumn: {md: 'span 2', xs: 'span 3'}, border: '1px solid #dddddd', p: 2, borderRadius: 2}}>
                <Typography sx={{fontWeight: 700, textTransform: 'capitalize'}} component='h1' variant="h4">
                    {name}
                </Typography>
            </Box>
        </Container>
        </Box>
        </>
    );
};

export default ProductDetails;