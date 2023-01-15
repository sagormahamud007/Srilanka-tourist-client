import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,
     signInWithEmailAndPassword, updateProfile, 
     signOut, onAuthStateChanged, GoogleAuthProvider,
      signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //userSignUp
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //userSignIn
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //userNameUpdate
    const userName = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    //sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //googleLogin
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //on authChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()

    }, [])


    const authInfo = {
        createUser,
        userSignIn,
        userName,
        user,
        googleSign,
        logOut,
        loading


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;