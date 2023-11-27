import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CouponModal = ({refetch}) => {
    const axiosSecure= useAxiosSecure()
    const handleAddCoupon = async (e) => {
        e.preventDefault()
        const form= e.target
        const code= form.code.value
        const discount= form.discount.value
        const description= form.description.value
        const couponData= {
            code,discount,description,
            status:"available"
        }
        console.log(couponData);
        const res= await axiosSecure.post('/addCoupon',couponData)
        if(res.data.insertedId)
        {
            toast.success("Coupon Added Successfully!")
            refetch()
        }
    }
    return (
        <div>
            {/* <button onClick={handleAddCoupon}>Add Coupon</button> */}
            <label htmlFor="my_modal_6" className="btn btn-success text-white">Add Coupon</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form onSubmit={handleAddCoupon}>
                    <h3 className="font-bold text-lg">Coupon Code</h3>
                    <input type="text" name="code" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h3 className="font-bold text-lg">Discount</h3>
                    <input type="number" name="discount" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                    <h3 className="font-bold text-lg">Description</h3>
                    <input type="text" name="description" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                   
                    
                    <div className="modal-action">
                        <button type="submit" className="btn btn-success text-white">Add Coupon</button>
                        <label htmlFor="my_modal_6" className="btn btn-secondary">Cancel</label>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default CouponModal;