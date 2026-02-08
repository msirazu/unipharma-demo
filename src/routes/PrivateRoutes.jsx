import { Box } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/dashboard/login'></Navigate>
};

export default PrivateRoutes;