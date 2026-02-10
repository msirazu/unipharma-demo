import { Box, Typography } from "@mui/material";
import { getProductDataFromLocalStorage } from "../../utilities/productStorage";

const DashboardProductsList = () => {
    const allProductsData = getProductDataFromLocalStorage();
    return (
        <>
        <Box sx={{p: 2, display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)'}}>
            {allProductsData.map(product => 
                <Box key={product.id} sx={{border: '1px solid #ddd', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Box sx={{width: '100px'}} component='img' src={product.image}/>
                    <Typography>
                    {product.name}
                    </Typography>
                </Box>
            )}
        </Box>
        </>
    );
};

export default DashboardProductsList;