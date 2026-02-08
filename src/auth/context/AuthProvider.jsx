import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const user = false;

    const userInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;