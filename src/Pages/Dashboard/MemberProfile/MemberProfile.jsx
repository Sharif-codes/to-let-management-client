import Profile from "../../../Shared/Profile/Profile";
import MemberStat from "./MemberStat";

const MemberProfile = () => {
    return (
        <div >
            <p className='text-3xl'>My Profile</p>
            <Profile></Profile>
            <p className="text-2xl font-semibold mb-5 text-center">My Apartment</p>
            <MemberStat></MemberStat>
        </div>
    );
};

export default MemberProfile;