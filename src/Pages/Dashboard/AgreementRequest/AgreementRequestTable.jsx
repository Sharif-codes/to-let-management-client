
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AgreementRequestTable = ({ agreementReq, serial, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { user_name, user_email, floor, block, room, rent, timestamp, apartment, si
    } = agreementReq

    const time = timestamp;
    const date = new Date(time);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    const handleAcceptAgreement = async (si, email) => {
        const res = await axiosSecure.put(`/acceptAgreement`, { si, email })
        console.log(res?.data)
        toast.success('Request accepted!')
        refetch()
    }
    const handleRejectAgreement = async (si) => {
        const res = await axiosSecure.patch(`/rejectAgreement/${si}`)
        console.log(res?.data);
        toast.success("Request cancelled successfully!")
        refetch()
    }
    return (
        <tr>
            <th>{serial + 1}</th>
            <td>{user_name}</td>
            <td>{user_email}</td>
            <td>{floor}</td>
            <td>{block}</td>
            <td>{apartment}</td>
            <td>{rent}</td>
            <td>{formattedDate}</td>
            <td><button onClick={() => handleAcceptAgreement(si, user_email)} className="bg-green-600 p-2 rounded-lg font-semibold text-white">Accept</button></td>
            <td><button onClick={() => handleRejectAgreement(si)} className="bg-red-600 p-2 rounded-lg font-semibold text-white">Reject</button></td>
        </tr>
    );
};
export default AgreementRequestTable;