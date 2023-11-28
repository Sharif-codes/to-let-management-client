import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";



const PaymentGateway = () => {
    const coupons= useAvailableCoupon()
    const [couponInput,setCouponInput]= useState("")
    const [discount,setDiscount]= useState('')
    const [price, setPrice]= useState(null)
    const [validateCoupon,setValidateCoupon]=useState(false)
    const location = useLocation();
    const data= location.state
   console.log(data);
   useEffect(()=>{
    const discountPercentage= parseFloat(discount)
    const netRent= parseFloat(data.rent)
    const discountAmount=validateCoupon? netRent* (discountPercentage/100): netRent
    const newPrice= netRent - discountAmount
    setPrice(newPrice)
   },[discount, data.rent, validateCoupon])
   const handleCouponValidate= (e)=>{
    const input= e.target.value
    setCouponInput(input)
    const foundCoupon = coupons.find((item) => item.code === input);

    if (foundCoupon) {
      setDiscount(foundCoupon.discount);
      setValidateCoupon(true);
    } else {
      setDiscount("");
      setValidateCoupon(false);
    }
   }
    return (
        <div>
            Net Rent: {data.rent}
            <div className="flex gap-2">
            <input onChange={handleCouponValidate} type="text" placeholder="Enter coupon code" className="input input-bordered input-primary w-full max-w-xs" />
            <button disabled={!validateCoupon} className="btn btn-primary">Apply coupon</button>
            </div>
            <p>Payable Amount: {price}</p>
        </div>
    );
};

export default PaymentGateway;