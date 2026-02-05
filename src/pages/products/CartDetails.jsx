import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromLocalStorage } from "../../utilities/addToLocalStorageDB";

const CartDetails = ({ cartData }) => {
const { name, price, imageUrl, quantity, quantityType, brand, category, subCategory, id, sku, stock } = cartData;
    const handleDelete = (id) => {
        removeFromLocalStorage(id);
    }
    return (
        <Box sx={{display: 'flex', border: '1px solid #dddddd', gap: 5, alignItems: 'center', p: 1}}>
            <Box sx={{width: '100px', backgroundColor: '#dddddd30', borderRadius: '10px'}} component='img' src={imageUrl}/>
            <Box>
                <Typography sx={{textTransform: 'capitalize', fontSize: '18px', fontWeight: 400}} variant="h6" component='h2'>
                {name}
            </Typography>
            <Typography sx={{fontWeight: '700'}} variant="p" component='p'>
                {`৳ ${price}`}
            </Typography>
            </Box>
            <Button onClick={() => handleDelete(id)} variant="text">
            <DeleteIcon/>
            </Button>
        </Box>
    );
};

export default CartDetails;