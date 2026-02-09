import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../auth/context/DataContext";
import { getFromLocalStorage, removeFromLocalStorage } from "../../utilities/addToLocalStorageDB";
import CartDetails from "./CartDetails";
import { toast } from 'react-toastify'

const Cart = () => {
    const { products, loading } = useContext(DataContext);
    const [cartIds, setCartIds] = useState([]);
    
    useEffect(() => {
        const newData = async() => {
        const storedCartProducts = getFromLocalStorage();
        setCartIds(storedCartProducts);
        }
        newData();
    }, []);

        const finalData = products.filter(p => cartIds.includes(p.id));

        const handleDelete = (id) => {
        const updatedIds = removeFromLocalStorage(id);
        setCartIds(updatedIds);
        toast.success('removed successfully')
        }
    return (
        <Box>
        <Box component='section' sx={{display: 'flex', flexDirection: 'column', gap: 2, p: 2, maxWidth: '1400px', mx: 'auto'}}>
            {finalData.map(cartData => <CartDetails key={cartData.id} handleDelete={handleDelete} cartData={cartData}/>)}
        </Box>
        </Box>
    );
};

export default Cart;