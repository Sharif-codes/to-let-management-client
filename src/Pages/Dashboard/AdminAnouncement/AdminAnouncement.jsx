import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminAnouncement = () => {
    const axiosSecure= useAxiosSecure()
    const handleAnouncement =async e=>{
        e.preventDefault()
        const form= e.target
        const title= form.title.value
        const description = form.description.value
        const anouncementData= {title,description}
        const res= await axiosSecure.post('/anouncement',anouncementData)
        if(res.data.insertedId)
        {
            toast.success("Anouncement added successfully!")
        }
    }
    return (
        <div className="w-1/2 mx-auto">
            <form onSubmit={handleAnouncement} className="flex flex-col space-y-5">
            <input type="text" name="title" placeholder="Enter title" className="input input-bordered input-primary w-full"/>
            <textarea className="textarea textarea-primary" name="description" placeholder="Anouncement Description"></textarea>
            <button type="submit" className="btn btn-primary">Add Anouncement</button>
            </form>
        </div>
    );
};

export default AdminAnouncement;