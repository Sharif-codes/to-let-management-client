import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import PaymentTable from "./PaymentTable";

const PaymentHistory = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const { data } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`)
      return res.data
    }
  })
  console.log(data);
  return (
    <div>
      Total Payment: {data?.length}
      <div className="overflow-x-auto">
      <div className="flex my-5 ml-4  gap-3">
            <input placeholder="Enter month" type="text" className=" outline-none border-2 p-2 rounded-lg" /> <button className="btn btn-info">Search</button>
        </div>
        <table className="table">
          {/* head */}

          <thead>

            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Month</th>
              <th>Rent</th>
              <th>TransactionID</th>
              <th>Payment Time</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((payment, idx) => <PaymentTable key={idx} index={idx} data={payment}></PaymentTable>)}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PaymentHistory;