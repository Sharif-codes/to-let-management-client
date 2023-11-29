import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaDollarSign, FaHistory, FaHome, FaList, FaPaypal, FaSignOutAlt, FaSpeakap, FaUser, FaUserFriends }
    from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCardSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
import useAuth from "../hooks/useAuth";
import useAnouncement from "../hooks/useAnouncement";

const Dashboard = () => {
    const anouncement = useAnouncement()
    const { logOut } = useAuth()
    const [isAdmin] = useAdmin()
    const [isMember] = useMember()
    console.log("is Admin:", isAdmin);
    console.log("is member", isMember);
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-info">
                <ul className="menu p-4">
                    {isAdmin ?
                        <>
                            <p className="text-2xl my-5 font-semibold border-2 p-2 rounded-xl">Admin Dashboard</p>
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
                        </> : isMember ?
                            <>
                                <p className="text-xl my-5 font-semibold border-2 p-2 rounded-xl">Member Dashboard</p>
                                <li>
                                    <NavLink to="/dashboard/memberProfile">
                                        <FaUser></FaUser>
                                        My Profile</NavLink>
                                    <NavLink to="/dashboard/memberPayment">
                                        <FaDollarSign></FaDollarSign>
                                        Make Payment</NavLink>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaHistory></FaHistory>
                                        Payment History</NavLink>
                                    <NavLink to="/dashboard/anouncements">
                                    <TbSpeakerphone />
                                            Anouncements({anouncement?.length})
                                    </NavLink>
                                </li>


                            </> :
                            <>
                                <p className="text-2xl my-5 font-semibold border-2 p-2 rounded-xl">User Dashboard</p>
                                <li>
                                    <NavLink to="/dashboard/userProfile">
                                        <FaUser></FaUser>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/anouncement" >
                                        <FaList></FaList>
                                        Anouncements{anouncement?.length}</NavLink>
                                </li>
                            </>}

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" >
                            <FaHome></FaHome>
                            Home</NavLink>
                        <NavLink to="/login" onClick={logOut} >
                            <FaSignOutAlt></FaSignOutAlt>
                            Logout</NavLink>
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