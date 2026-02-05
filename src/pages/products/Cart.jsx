import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../auth/context/DataContext";
import { getFromLocalStorage } from "../../utilities/addToLocalStorageDB";
import CartDetails from "./CartDetails";

const Cart = () => {
    const { products, loading } = useContext(DataContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const newData = async() => {
        const storedCartProducts = getFromLocalStorage();
        const finalData = products.filter(p => storedCartProducts.includes(p.id));
        setData(finalData);
        }
        newData();
    }, [products]);
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, p: 2}}>
            {data.map(cartData => <CartDetails key={cartData.id} cartData={cartData}/>)}
        </Box>
    );
};

export default Cart;