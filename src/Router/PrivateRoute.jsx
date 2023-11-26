import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../component/Spinner/Spinner";

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location= useLocation()

    if(loading)
    {
        return 
    }
    if(user)
    {
        return  children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
   
};
export default PrivateRoute;