import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CartDetails = ({ cartData, handleDelete }) => {
const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id, sku, stock } = cartData;
    return (
        <Box sx={{display: 'grid', border: '1px solid #dddddd', gap: 5, alignItems: 'center', p: 1, gridTemplateColumns: 'repeat(5, 1fr)', justifyContent: 'center'}}>
            <Box sx={{gridColumn: 'span 1'}}>
            <Box sx={{width: '100px', backgroundColor: '#dddddd30', borderRadius: '10px'}} component='img' src={imageUrl}/>
            </Box>
            <Box sx={{gridColumn: 'span 3'}}>
                <Typography sx={{textTransform: 'capitalize', fontSize: '18px', fontWeight: 400}} variant="h6" component='h2'>
                {name}
            </Typography>
            <Typography sx={{fontWeight: '700'}} variant="p" component='p'>
                {`৳ ${price}`}
            </Typography>
            </Box>
            <Box sx={{gridColumn: 'span 1', display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={() => handleDelete(id)} variant="text">
            <DeleteIcon/>
            </Button>
            </Box>
        </Box>
    );
};

export default CartDetails;