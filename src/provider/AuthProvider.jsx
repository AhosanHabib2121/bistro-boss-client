import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // createAccount
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // loginAccount
    const loginAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Login with google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // profile update
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL:photo
        })
    }

    // loginOut
    const loginOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser)
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createAccount,
        profileUpdate,
        loginAccount,
        loginWithGoogle,
        loginOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;