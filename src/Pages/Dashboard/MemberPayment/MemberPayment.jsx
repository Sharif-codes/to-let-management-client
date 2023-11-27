import useMemberRoom from "../../../hooks/useMemberRoom";
import PaymentInfo from "./PaymentInfo";


const MemberPayment = () => {
    const room= useMemberRoom()
    console.log(room);
    return (
        <div>
            {
                room?.map(item=><PaymentInfo key={item._id} info={item}></PaymentInfo>)
            }
        </div>
    );
};

export default MemberPayment;