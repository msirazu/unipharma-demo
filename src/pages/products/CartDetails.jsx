import { Box, Typography } from "@mui/material";

const CartDetails = ({ cartData }) => {
const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id, sku, stock } = cartData;
    return (
        <Box sx={{display: 'flex', border: '1px solid #dddddd'}}>
            <Box sx={{width: '100px'}} component='img' src={imageUrl}/>
            <Typography variant="h6" component='h2'>
                {name}
            </Typography>
        </Box>
    );
};

export default CartDetails;