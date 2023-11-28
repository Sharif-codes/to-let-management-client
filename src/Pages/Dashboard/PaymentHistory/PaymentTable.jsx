
const PaymentTable = ({data,index}) => {
    const {email,price,TransactionId,time}=data
    const timestamp = time;
const date = new Date(timestamp * 1000);
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-based, so add 1
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const formattedDateTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

console.log(formattedDateTime);
    return (
        <tr >
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{data.month}</td>
        <td>{price}</td>
        <td>{TransactionId}</td>
        <td>{formattedDateTime} (utc)</td>
      </tr>
    );
};

export default PaymentTable;