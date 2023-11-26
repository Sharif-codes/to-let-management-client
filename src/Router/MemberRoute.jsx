import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useMember from "../hooks/useMember";
import Spinner from "../component/Spinner/Spinner";


const MemberRoute = ({children}) => {
    const {user, loading}= useAuth()
    const [isMember, isMemberLoading]= useMember()
    const location= useLocation()
    
    if(loading || isMemberLoading)
    {
        return <Spinner></Spinner>
    }
    if(user && isMember)
    {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default MemberRoute;