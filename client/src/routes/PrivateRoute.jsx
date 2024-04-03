import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {userID, setUserID} = useContext(AuthContext);

    if(userID){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
}

export default PrivateRoute;