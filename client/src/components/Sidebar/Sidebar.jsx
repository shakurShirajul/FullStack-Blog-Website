import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-2/12">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Home</a></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><a>Settings</a></li>
                        <li><a>Questions</a></li>
                        <li><a>Tags</a></li>
                        <li><a>Save</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;