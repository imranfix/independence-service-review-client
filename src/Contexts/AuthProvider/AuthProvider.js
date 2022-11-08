import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // created user (email and password):
    const createdUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login system:
    const login = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // set observer:
    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return () =>{
            return unsubscribe;
        }

    }, [])



    const authInfo = {
        user,
        loading,
        createdUser,
        login,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;