import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUser = () => {
   const axiosSecure=useAxiosSecure()
   const {user}= useAuth()
   const {data: isUser, isPending: isUserLoading}= useQuery({
    queryKey: [user?.email,"users"],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/user/users/${user.email}`)
        return res.data?.user
    }
   })
   return [isUser,isUserLoading]
};

export default useUser;