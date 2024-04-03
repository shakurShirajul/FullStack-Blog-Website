import { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) =>{

    const [userID, setUserID] = useState('');
    
    const authInfo ={
        userID,
        setUserID
    };

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;