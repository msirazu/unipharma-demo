import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import ProductDetails from '../pages/products/ProductDetails';

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {path: '', element: <Home/>, loader: async() => {
            const dataRes = await fetch('/data/products-data.json');
            return dataRes.json();
        }}, 
        {path: 'product-details/:Id', element: <ProductDetails/>}
    ], hydrateFallbackElement: <NotFound/>}
]);

export default router;