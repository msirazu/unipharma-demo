import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import ProductDetails from '../pages/products/ProductDetails';
import CircularColorLoading from '../components/loading/CircularColorLoading';
import { Box } from '@mui/material';

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {path: '', element: <Home/>, loader: async() => {
            const dataRes = await fetch('/data/products-data.json');
            return dataRes.json();
        }}, 
        {path: 'product-details/:Id', element: <ProductDetails/>}
    ], hydrateFallbackElement: <Box><CircularColorLoading /></Box>}
]);

export default router;