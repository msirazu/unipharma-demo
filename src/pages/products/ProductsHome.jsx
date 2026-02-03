import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductsHome = ({ product }) => {
    const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id } = product;
    const handleAddToCart = (id) => {
        console.log('cart clicked', id);
    }
    return (
        <Box sx={{border: '1px solid #dddddd', boxShadow: 1, borderRadius: 2, p: 2}} component='section'>
            <Box sx={{textDecoration: 'none'}} to={`/product-details/${id}`} component={Link}>
                <Box sx={{width: '100%'}} component='img' src={imageUrl}/>
                <Typography sx={{fontSize: '20px', fontWeight: 500, textTransform: 'capitalize', mb: 1}} variant="p" component='h2'>
                    {name}
                </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={() => handleAddToCart(id)} startIcon={<ShoppingCartIcon/>} variant="contained" sx={{fontSize: {xs: '12px', md: '15px'}, textTransform: 'capitalize'}}>Add to Cart</Button>
                </Box>
        </Box>
    );
};

export default ProductsHome;