import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataReloader, setDataReloader] = useState(false);

    const GoogleProvider = new GoogleAuthProvider();

    const createEmailPasswordUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser)
            console.log('Current user is ', currentUser);
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        dataReloader,
        createEmailPasswordUser,
        emailPasswordLogin,
        googleSignIn,
        logOut,
        setDataReloader



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;