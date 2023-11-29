

const MemberStatTable = ({memberRoom,index}) => {
    const date = new Date(memberRoom.accept_date);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${day}/${month}/${year}`;
    return (
        <tr key={memberRoom._id}>
            <th>{index + 1}</th>
            <td>{memberRoom.apartment}</td>
            <td>{memberRoom.block}</td>
            <td>{memberRoom.floor}</td>
            <td>{memberRoom.room}</td>
            <td>৳{memberRoom.rent}</td>
            <td>{formattedDate}</td>

        </tr>
    );
};

export default MemberStatTable;