import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import MemberStatTable from "./MemberStatTable";
import useMemberRoom from "../../../hooks/useMemberRoom";

const MemberStat = ({apartment}) => {
    // const axiosSecure= useAxiosSecure()
    // const {user}= useAuth()
    // const email= user.email
    // const {data}= useQuery({
    //     queryKey: ["memberData"],
    //     queryFn: async ()=>{
    //        const res= await axiosSecure.get(`/memberData/${email}`)
    //       return res.data
    //     }
    // })
    const data= useMemberRoom()

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Apartment no.</th>
                        <th>block</th>
                        <th>floor</th>
                        <th>room no</th>
                        <th>Rent price</th>
                        <th>Agreement Accept date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item,idx)=> <MemberStatTable key={idx} index={idx} memberRoom={item}></MemberStatTable> )
                    }
                   

                </tbody>
            </table>
        </div>
    );
};

export default MemberStat;