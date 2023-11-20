import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{ user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log('private route',location)
    if (loading) {
        return <div>loading....</div>
    }
    if (!user) {
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;