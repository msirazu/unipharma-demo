import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsHome = ({ product }) => {
    const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id } = product;
    return (
        <Box sx={{textDecoration: 'none'}} to={`/product-details/${id}`} component={Link}>
        <Box sx={{border: '1px solid #dddddd', boxShadow: 1, borderRadius: 2, p: 2}} component='section'>
                <Box sx={{width: '100%'}} component='img' src={imageUrl}/>
                <Typography sx={{fontSize: '20px', fontWeight: 500, textTransform: 'capitalize', mb: 1}} variant="p" component='h2'>
                    {name}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained">Add to Cart</Button>
                </Box>
        </Box>
        </Box>
    );
};

export default ProductsHome;