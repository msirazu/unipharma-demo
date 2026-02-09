import { useContext } from "react";
import AuthContext from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const { user, userLoading } = useContext(AuthContext);

    if (userLoading) {
        return <p>loading.....</p>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/dashboard/auth/login'></Navigate>
};

export default PrivateRoutes;