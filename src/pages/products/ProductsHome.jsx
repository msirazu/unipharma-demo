import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { saveToLocalStorageDB } from "../../utilities/addToLocalStorageDB";
import { toast } from "react-toastify";

const ProductsHome = ({ product }) => {
    const { name, priceDes, imageUrl, quantity, quantityType, brand, category, subCategory, id } = product;
    const handleAddToCart = (id) => {
        const isAdded = saveToLocalStorageDB(id);
        if (!isAdded) {
            toast.warning('product already in cart');
        } else {
            toast.success('product added to cart');
        }
    }
    return (
        <Box sx={{border: '1px solid #dddddd', boxShadow: 1, borderRadius: 2, p: 2}} component='section'>
            <Box sx={{textDecoration: 'none'}} to={`/product-details/${id}`} component={Link}>
                <Box sx={{width: '100%', '&:hover': {backgroundColor: '#dddddd50'}}} component='img' src={imageUrl}/>
                <Typography sx={{textTransform: 'capitalize', mb: 1}} component='h6' variant='p'>
                    {`${subCategory} > ${brand} > ${category}`}
                </Typography>
                <Typography sx={{fontSize: '15px', fontWeight: 500, textTransform: 'capitalize', mb: 1, color: '#000000'}} variant="p" component='h2'>
                    {`${name} - ${quantity}`}
                    <Typography sx={{textTransform: 'uppercase', ml: 1}} variant='p' component='span'>
                        {`${quantityType.slice(0, 3)}`}
                    </Typography>
                    <Typography sx={{display: 'block', mt: '3px'}} component='span' variant="p">
                        {`৳ ${priceDes}`}
                    </Typography>
                </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={() => handleAddToCart(id)} startIcon={<ShoppingCartIcon/>} variant="text" sx={{fontSize: {xs: '12px', md: '15px'}, textTransform: 'capitalize', '& .MuiButton-startIcon': {marginRight: '4px', my: 1}, '& .MuiSvgIcon-root': {fontSize: {xs: '15px', md: '20px'}}, width: '100%', border: '1px solid #00af44', color: '#000000', '&:hover':{backgroundColor: '#00af44', color: '#ffffff'}}}>Add to Cart</Button>
                </Box>
        </Box>
    );
};

export default ProductsHome;