import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import PaymentTable from "./PaymentTable";
import { useState } from "react";

const PaymentHistory = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const monthText = e.target.monthText.value.toLowerCase();
  
    if (data) {
      const filteredMonth = data.filter(
        (item) => item.month && item.month.toLowerCase() === monthText
      );
      setFilteredData(filteredMonth);
    }
  };
  

  return (
    <div>
      <div className="flex my-5 ml-4 gap-3">
        <form onSubmit={handleSearch}>
          <input
            name="monthText"
            placeholder="Enter month"
            type="text"
            className="outline-none border-2 p-2 rounded-lg"
          />
          <button type="submit" className="btn btn-info">
            Search
          </button>
        </form>
      </div>

      <div className="overflow-x-auto">
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
            {isLoading ? (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            ) : (
              (filteredData.length > 0 ? filteredData : data).map(
                (payment, idx) => (
                  <PaymentTable
                    key={idx}
                    index={idx}
                    data={payment}
                  ></PaymentTable>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

