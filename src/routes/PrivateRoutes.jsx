import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    

    if(loading){
        return <h1 className="font-semibold text-2xl">Loading...</h1>
    }

    if(user){
        return children
    }


    return (
        <Navigate to="/login" state={{from: location}} replace/>
    );
};

export default PrivateRoutes;