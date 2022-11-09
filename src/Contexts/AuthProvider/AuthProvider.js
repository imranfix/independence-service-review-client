import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google signIn method:
    const googleProvider = new GoogleAuthProvider();

    // gogle singIn:
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // created user (email and password):
    const createdUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login system:
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut / logOut:
    const logOut = () =>{
        return signOut(auth);
    }

    // set observer:
    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }

    }, [])



    const authInfo = {
        user,
        loading,
        createdUser,
        login,
        signInWithGoogle,
        logOut,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;