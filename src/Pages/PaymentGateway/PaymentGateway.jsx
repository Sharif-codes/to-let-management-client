
import { useLocation } from "react-router-dom";
import useAvailableCoupon from "../../hooks/useAvailableCoupon";
import CheckoutForm from "../../component/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";



const PaymentGateway = () => {
  const location = useLocation();
  const data = location.state
  const coupons = useAvailableCoupon()
  const [couponInput, setCouponInput] = useState("")
  const [discount, setDiscount] = useState('')
  const [price, setPrice] = useState(data?.rent)
  const [validateCoupon, setValidateCoupon] = useState(false)


  const handleCouponValidate = (e) => {
    const input = e.target.value
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

  //  setPrice(netRent)
  const handlePayableAmount = () => {
    const netRent = parseFloat(data?.rent)
    const discountPercentage = parseFloat(discount)
    const discountAmount = netRent * (discountPercentage / 100)
    const newPrice = netRent - discountAmount
    setPrice(newPrice)
  }
  const stripepromise = loadStripe(import.meta.env.VITE_payment_key)
  return (
    <div className=" space-y-3 ">
      <div className="w-fit border-2 p-2 md:p-4 space-y-3 rounded-lg mx-auto mt-10">
        <p>Net Rent: {data?.rent}</p>
        <div className="flex gap-2 ">
          <input onChange={handleCouponValidate} type="text" placeholder="Enter coupon code" className="border-primary rounded-lg outline-none border-2 px-2" />
          <button onClick={handlePayableAmount} disabled={!validateCoupon} className="btn btn-primary">Apply coupon</button>
        </div>
        <p>Payable Amount: {price}</p>
        <div className="mt-2">
          <Elements stripe={stripepromise}>
            <CheckoutForm month={data.month} price={price}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;