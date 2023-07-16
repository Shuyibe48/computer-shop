import { createContext } from "react";

const AuthContext = createContext(null)


const AuthProvider = () => {
    const authInfo = {
        user: {name:'Fahim Ahmed', age: 22}
    }

    return (
        <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    );
};

export default AuthProvider;