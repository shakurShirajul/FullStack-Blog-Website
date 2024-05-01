import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Posts from "../components/Posts/Posts";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile/Profile";
import TextBox from "../components/TextBox/TextBox";
import Login from "../components/Login/Login"
import Register from "../components/Register/Register";
import Settings from "../Pages/Settings";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Posts></Posts>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: '/newstory',
                element: <TextBox></TextBox>,
            },
            {
                path:'/settings',
                element: <Settings></Settings>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register />,
    }
]);

export default Router;