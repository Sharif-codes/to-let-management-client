import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useAuth()

    return (
        <div className="navbar w-full bg-info bg-opacity-20 max-w-screen-xl">

            <div className="flex-1 flex items-center">
                <img className="w-10" src="/logo-casa.svg" alt="" />
                <p className="ml-2 hidden md:block
                 text-lg md:text-xl font-semibold">To-let<span className="text-info">Vista</span></p>
            </div>
            <div>
                <div className="space-x-4 px-2 font-semibold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active underline text-pink-600" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/apartment"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active underline text-pink-600" : ""
                        }
                    >
                        Apartment
                    </NavLink>
                </div>
            </div>
            <div className="flex-none gap-2">
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt={user.displayName} src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="font-lg ml-3 text-info justify-center">
                                {user.displayName}
                            </li>
                            <hr />

                            <Link to="/dashboard"><li><a>Dashboard</a></li></Link>
                            <li onClick={logOut}><a>Logout</a></li>
                        </ul>
                    </div> : <Link to="/login"><button className="btn btn-neutral">Login<MdLogin></MdLogin></button></Link>
                }



            </div>


        </div>
    );
};

export default Navbar;