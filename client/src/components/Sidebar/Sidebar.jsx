import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className="w-2/12 border-r font-space-grotesk">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full font-normal bg-base-200 text-base-content text-lg">
                        {/* Sidebar content here */}
                        <li><NavLink to="/"><IoMdHome/>Home</NavLink></li>
                        <li><NavLink to="/profile"><CgProfile />Profile</NavLink></li>
                        <li><NavLink to="/newstory"><IoMdCreate />Create Blog</NavLink></li>
                        <li><NavLink to="/settings"><IoIosSettings />Settings</NavLink></li>
                        {/* <li><a>Questions</a></li>
                        <li><a>Tags</a></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;