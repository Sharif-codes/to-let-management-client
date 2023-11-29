
import MemberStatTable from "./MemberStatTable";
import useMemberRoom from "../../../hooks/useMemberRoom";

const MemberStat = ({apartment}) => {
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