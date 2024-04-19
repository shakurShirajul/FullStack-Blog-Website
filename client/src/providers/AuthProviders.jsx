import { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) =>{

    const [userID, setUserID] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    
    const authInfo ={
        userID,
        setUserID,
        isLogin,
        setIsLogin
    };

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;