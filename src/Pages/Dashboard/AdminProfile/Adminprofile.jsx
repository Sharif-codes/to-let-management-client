import Profile from "../../../Shared/Profile/Profile";
import AdminStats from "../../../component/AdminStats/AdminStats";

const Adminprofile = () => {
   

    return (
        <div>
            <p className='text-3xl'>Admin Profile</p>
            <Profile></Profile>
            <AdminStats></AdminStats>
        </div>
    );
};

export default Adminprofile;
