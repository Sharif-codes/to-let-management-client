import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaEnvelope, FaFonticons, FaHome, FaList, FaSoundcloud, FaSpeakap, FaSpeakerDeck, FaUser, FaUserFriends, FaUtensils }
    from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCardSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import Section from "../Shared/Section/Section";
import useMember from "../hooks/useMember";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isMember]= useMember()
    console.log("is admin", isAdmin);
    console.log("is member", isMember);
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-info">
                <ul className="menu p-4">
                    {isAdmin ?
                        <>
                            <li>
                                <NavLink to='/dashboard/adminProfile' >
                                    <FaUser></FaUser>
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageMember' >
                                    <FaUserFriends></FaUserFriends>
                                    Manage Members
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/makeAnouncement' >
                                    <TbSpeakerphone />
                                    Make Announcement</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/agreementRequest' >
                                    <FaBook></FaBook>
                                    Agreement Requests</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageCoupon' >
                                <IoCardSharp />
                                    Manage Coupons
                                </NavLink>
                            </li>
                        </> : isMember?
                        <>
                         <li>
                                <NavLink to="/dashboard/memberProfile">
                                    <FaUser></FaUser>
                                    My Profile</NavLink>
                            </li>
                        
                        
                        </>:
                        <>
                            <p className="text-3xl my-5">User Dashboard</p>
                            <li>
                                <NavLink to="/dashboard/userProfile">
                                    <FaUser></FaUser>
                                    My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/anouncement" >
                                    <FaList></FaList>
                                    Anouncements</NavLink>
                            </li>
                        </>}

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" >
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;