import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    const {user,logOut}= useAuth()
    
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Building Management</a>
            </div>
            <div className="flex-none gap-2">
                {
                    user? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li className="font-lg text-info justify-center">
                           
                                {user.displayName}
                            
                        </li>
                        <li><a>Dashboard</a></li>
                        <li onClick={logOut}><a>Logout</a></li>
                    </ul>
                </div>: <Link to="/login"><button className="btn btn-active">Login<MdLogin></MdLogin></button></Link>
                }
                

                
            </div>
            
        </div>
    );
};

export default Navbar;