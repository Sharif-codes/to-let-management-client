import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Spinner from "../component/Spinner/Spinner";


const AdminRoute = ({children}) => {
    const {user, loading}= useAuth()
    const [isAdmin, isAdminLoading]= useAdmin()
    const location= useLocation()
    if(loading || isAdminLoading)
    {
        // return <progress className="progress w-56"></progress>
        return <Spinner></Spinner>
    }
    if(user && isAdmin)
    {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;