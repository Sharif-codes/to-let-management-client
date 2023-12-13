
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAvailableCoupon = () => {
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ["couponAvailable"],
        queryFn: async () => {
            const res = await axiosSecure.get('/couponAvailable')
            return res.data
        }
    })
    return data
};

export default useAvailableCoupon;