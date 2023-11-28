import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";



const PaymentInfo = ({ info }) => {
    const [selectMonth, setSelectedMonth] = useState('')
    const { user_name, user_email, floor, block, room, rent, timestamp, apartment, si
    } = info
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    const paymentDescription = {
        email: user_email,
        floor, block, apartment, rent,
        month: selectMonth
    }
    console.log(paymentDescription);
    return (
        <div className="flex justify-center" >
            <div className="space-y-3 mt-10 p-5 border-2 w-fit rounded-xl" data-aos="fade-right">
                <p className="font-semibold">Email: <span className="text-gray-500">{user_email}</span></p>
                <p className="font-semibold">Floor: <span className="text-gray-500">{floor}</span></p>
                <p className="font-semibold">Block: <span className="text-gray-500">{block}</span></p>
                <p className="font-semibold">Apartment: <span className="text-gray-500">{apartment}</span></p>
                <p className="font-semibold">Rent: <span className="text-gray-500">৳{rent}</span></p>
                <select className="select select-info w-full max-w-xs" onChange={handleMonthChange}>
                    <option disabled selected>Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <Link
                    to='/dashboard/payment' state={paymentDescription}
                >
                    <button className="btn btn-primary mt-3">
                        <FaWallet></FaWallet> Pay
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default PaymentInfo;