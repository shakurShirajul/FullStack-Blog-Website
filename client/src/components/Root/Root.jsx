// import Posts from "../Posts/Posts";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h1>Shirajul Islam</h1>
            <Navbar></Navbar>
            <div className="container mx-auto flex">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;