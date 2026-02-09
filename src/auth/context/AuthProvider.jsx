import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [auth]);

    const logOutUser = () => {
        return signOut(auth);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOutUser,
        logInUser,
        userLoading,
        setUserLoading,
        updateUser
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;