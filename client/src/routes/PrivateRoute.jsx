import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userID, setUserID, setIsLogin} = useContext(AuthContext);

    if(setIsLogin){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
}

export default PrivateRoute;