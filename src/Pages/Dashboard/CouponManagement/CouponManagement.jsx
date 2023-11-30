import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CouponModal from "./CouponModal";
import toast from "react-hot-toast";


const CouponManagement = () => {
    const axiosSecure = useAxiosSecure()
    const { data, refetch } = useQuery({
        queryKey: ["coupons",],
        queryFn: async () => {
            const res = await axiosSecure.get('/coupons')
            return res.data
        }
    })

    const handleUnavailable= async (id)=>{
        const res= await axiosSecure.patch(`/couponUnavailable/${id}`)
        if(res.data.modifiedCount)
        {
            refetch()
            toast.success("This coupon is unavailable now!")
        }
        

    }
    const handleAvailable= async (id)=>{
        const res= await axiosSecure.patch(`/couponAvailable/${id}`)
        if(res.data.modifiedCount)
        {
            refetch()
            toast.success("This coupon is available now!")
        }
        
    }

    return (
        <div>
            <div className="mb-5">
                <CouponModal refetch={refetch}></CouponModal>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coupon Code</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item,idx)=><tr key={idx}>
                            <th>{idx+1}</th>
                            <td>{item.code}</td>
                            <td>{item.discount}%</td>
                            <td>{item.status=="available"?<button onClick={()=>handleUnavailable(item._id)} className="bg-red-500 p-2 rounded-lg text-white">Make Unavailable</button>:<button onClick={()=>handleAvailable(item._id)} className="bg-green-500 p-2 rounded-lg">Make Available</button> }</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CouponManagement;