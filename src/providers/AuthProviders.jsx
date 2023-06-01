import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataReloader, setDataReloader] = useState(false);

    const createEmailPasswordUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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