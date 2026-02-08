import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/home/Home';
import ProductDetails from '../pages/products/ProductDetails';
import CircularColorLoading from '../components/loading/CircularColorLoading';
import Cart from '../pages/products/Cart';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardLogin from '../auth/login/DashboardLogin';
import DashboardHome from '../pages/dashboard/DashboardHome';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout/>, children: [
        {path: '', element: <Home/>, loader: async() => {
            const dataRes = await fetch('/data/products-data.json');
            return dataRes.json();
        }}, 
        {path: 'product-details/:Id', element: <ProductDetails/>},
        {path: 'cart', element: <Cart/>}
    ], hydrateFallbackElement: <CircularColorLoading />},
    {path: '/dashboard', element: <DashboardLayout/>, children: [
        {path: '', element: <PrivateRoutes><DashboardHome/></PrivateRoutes>},
        {path: 'login', element: <DashboardLogin/>}
    ]}
]);

export default router;