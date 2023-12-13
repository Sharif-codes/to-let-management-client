import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaDollarSign, FaHistory, FaHome, FaList, FaPaypal, FaSignOutAlt, FaSpeakap, FaSpinner, FaUser, FaUserFriends }
    from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { IoCardSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import useMember from "../hooks/useMember";
import useAuth from "../hooks/useAuth";
import useAnouncement from "../hooks/useAnouncement";
import useUser from "../hooks/useUser";
import Spinner from "../component/Spinner/Spinner";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";

const Dashboard = () => {
    const anouncement = useAnouncement()
    const { logOut } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isMember, isMemberLoading] = useMember()
    const [isUser, isUserLoading] = useUser()
    const [sidebarVisibility, setSidebarVisibility] = useState(true)
    console.log("is Admin:", isAdmin);
    console.log("is member", isMember);
    console.log("is user  :", isUser);
    if (isAdminLoading || isMemberLoading || isUserLoading) {
        return <Spinner></Spinner>
    }
    const toggleSidebar = () => {
        setSidebarVisibility(!sidebarVisibility);
    };
    console.log("sidebar visibility: ", sidebarVisibility);
    return (
        <div>
            {/* <button onClick={toggleSidebar} className="btn btn-primary">
                Toggle Sidebar
            </button> */}
            <div className="navbar bg-base-100 border-b-2 mb-2">
                <div className="flex-none">
                    {sidebarVisibility? <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden block">
                    
                        <RxCross2 className="text-2xl"></RxCross2>
                    </button>: <button onClick={toggleSidebar} className="btn btn-square btn-ghost lg:hidden block">
                    
                    <MdMenu className="text-2xl"></MdMenu>
                </button>}
                    
                </div>
                <div className="flex-1 flex items-center">
                <img className="w-10" src="logo-casa.svg" alt="" />
                <p className="ml-2 hidden md:block
                 text-lg md:text-xl font-semibold">To-Let <span className="text-info">Vista</span></p>
            </div>
                <div className="flex gap-3">
                
                        <NavLink to="/" >
                           
                            Home</NavLink>
                    
                
                        <NavLink to="/login" onClick={logOut} >
                           
                            Logout</NavLink>
                    
                </div>

            </div>
            <div className="flex">
                {/* sidebar start */}
              
                <div className={`w-64 min-h-screen bg-info lg:block lg:relative ${sidebarVisibility ? 'absolute z-10' : 'hidden'} transition duration-200 ease-in-out`}>
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
                            </> : " "} {isMember ?
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


                                </> : " "} {isUser ?
                                    <>
                                        <p className="text-2xl my-5 font-semibold border-2 p-2 rounded-xl">User Dashboard</p>
                                        <li>
                                            <NavLink to="/dashboard/userProfile">
                                                <FaUser></FaUser>
                                                My Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/anouncements" >
                                                <FaList></FaList>
                                                Anouncements{anouncement?.length}</NavLink>
                                        </li>
                                    </> : " "}

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
                {/* sidebar end */}
                
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div> 
        </div>
    );
};

export default Dashboard;
