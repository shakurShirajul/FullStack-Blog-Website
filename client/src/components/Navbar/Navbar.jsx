import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders';
const Navbar = () => {

    const { userID, setUserID } = useContext(AuthContext)

    const handleLogOut = () => {
        setUserID('');
        console.log(userID);
    }

    return (
        <div className="container mx-auto mb-10 border-2">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">TEXT</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        {userID ?
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </>
                            :
                            <div>
                                <button className="btn btn-outline btn-success"><Link to="/login">Log In</Link></button>
                                <button className="btn btn-outline btn-warning"><Link to="">Sign Up</Link></button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;