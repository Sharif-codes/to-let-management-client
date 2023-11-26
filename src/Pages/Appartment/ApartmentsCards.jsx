
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
// import axiosSecure from "../../api";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApartmentsCards = ({apartmentData}) => {
    const {apartment,block,floor,image,rent}=apartmentData
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()

    const handleAgreement= ()=>{
        const agreementData= {
            user_name: user.displayName,
            user_email: user.email,
            floor: floor,
            block: block,
            apartment: apartment,
            rent: rent,
            status: 'pending'
        }
        Swal.fire({
            title: "Are you sure?",
            text: "An agreement request will be sent to the owner",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/agreement',agreementData)
                .then(res=>{
                    console.log(res.data)
                    Swal.fire({
                        title: "Request sent!",
                        text: "Wait for the confirmation from the owner!",
                        icon: "success"
                      });
                } )
           
            }
          });


       
    }
    return (
       <div className="mt-10 mx-auto">
         <div className="card w-96 h-96 glass">
            <figure className="h-fit"><img src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Apartment No. {apartment}</h2>
                <p>Block-{block}, Floor-{floor}</p>
                <p>Rent Price: ৳{rent}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAgreement} disabled={!user} className="btn btn-primary">Agreement</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ApartmentsCards;