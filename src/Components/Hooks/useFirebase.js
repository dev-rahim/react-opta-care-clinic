import { GoogleAuthProvider, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.init"

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    InitializeAuthentication()
    const auth = getAuth()
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const createUserUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
    }
    const signInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
        setUser({})
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user.email) {
                return
            }
            else {
                setUser(user)

            }
        });

    },)
    return {
        logOut, createUserUsingEmail, signInWithEmailPass, user, signInUsingGoogle
    }
}
export default useFirebase;