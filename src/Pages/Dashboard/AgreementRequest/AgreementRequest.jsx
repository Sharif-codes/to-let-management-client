import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AgreementRequestTable from "./AgreementRequestTable";

const AgreementRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: agreement = [], refetch } = useQuery({
        queryKey: ["agreement",],
        queryFn: async () => {
            const res = await axiosSecure.get("/agreement");
            return res.data;
        },
    });
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Floor No.</th>
                        <th>Block No.</th>
                        <th>Room No.</th>
                        <th>Rent</th>
                        <th>Agreement Req. Date</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        agreement.map((item,idx) =><AgreementRequestTable refetch={refetch} key={idx} serial={idx} agreementReq={item}></AgreementRequestTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AgreementRequest;