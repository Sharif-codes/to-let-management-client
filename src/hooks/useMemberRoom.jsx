import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMemberRoom = () => {
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()
    const email= user.email
    const {data}= useQuery({
        queryKey: ["memberData"],
        queryFn: async ()=>{
           const res= await axiosSecure.get(`/memberData/${email}`)
          return res.data
        }
    })
    return data
};

export default useMemberRoom;