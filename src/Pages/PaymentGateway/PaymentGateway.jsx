import { useLocation } from "react-router-dom";



const PaymentGateway = () => {
    const location = useLocation();
    const data= location.state
   console.log(data);
    return (
        <div>
            Rent: {data.rent}
        </div>
    );
};

export default PaymentGateway;