import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

    const user = true;

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