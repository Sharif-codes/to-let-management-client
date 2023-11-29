import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAnouncement = () => {
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ["anouncement"],
        queryFn: async () => {
            const res = await axiosSecure.get("/anouncement")
            return res.data
        }
    })
    return data
};

export default useAnouncement;