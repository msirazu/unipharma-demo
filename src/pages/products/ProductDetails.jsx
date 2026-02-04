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

    const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id, sku, stock } = singleProduct;

    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Container sx={{maxWidth: '1400px', display: 'grid', gridTemplateColumns: {md: 'repeat(3, 1fr)', xs: 'repeat(1, 1fr)'}, gap: 3, mx: {md: 0, xs: 0}, my: {md: 2, xs: 2}}}>
            <Box sx={{gridColumn: {md: 'span 1', xs: 'span 3'}, border: '1px solid #dddddd', borderRadius: 2, display: 'flex', justifyContent: 'center'}}>
                <Box sx={{maxWidth: '400px'}} component='img' src={imageUrl}/>
            </Box>
            <Box sx={{gridColumn: {md: 'span 2', xs: 'span 3'}, border: '1px solid #dddddd', p: 5, borderRadius: 2}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {xs: 'column', sm: 'row'}, gap: 3}}>
                <Box>
                <Typography sx={{fontWeight: 700, textTransform: 'capitalize'}} component='h1' variant="h4">
                    {name}
                </Typography>
                <Typography sx={{fontSize: '14px'}} component='p' variant="p">
                    {`SKU: ${sku}`}
                    <Typography sx={{ml: 2}} variant="p" component='span'>
                    {`Stock: ${stock}`}
                    </Typography>
                </Typography>
                </Box>
                <Typography sx={{fontWeight: '700'}} component='h5' variant="h4">
                    {`৳ ${price}`}
                </Typography>
                </Box>
            </Box>
        </Container>
        </Box>
        </>
    );
};

export default ProductDetails;