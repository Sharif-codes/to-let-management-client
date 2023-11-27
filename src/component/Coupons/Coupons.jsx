import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Coupons = ({ coupon }) => {


    return (
        <div key={coupon._id} className="card w-72 bg-primary text-primary-content animate-pulse">
            <div className="card-body">
                <h2 className="card-title">{coupon.discount}% Discount</h2>
                <p> {coupon.description}</p>
                <div className="card-actions flex items-center">
                    <div>Code: <span className="text-red-500">{coupon.code}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Coupons;