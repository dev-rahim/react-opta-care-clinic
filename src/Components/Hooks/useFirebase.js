import { GoogleAuthProvider, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.init"

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    InitializeAuthentication()
    const auth = getAuth()
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const createUserUsingEmail = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    const signInWithEmailPass = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { }).finally(() => {
                setIsLoading(false)
            })
        setUser({})
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user.email) {
                setIsLoading(true)
                return
            }
            else {
                setUser(user)
            }
            setIsLoading(false)

        });

    },)
    return {
        setIsLoading, isLoading, logOut, createUserUsingEmail, signInWithEmailPass, user, signInUsingGoogle
    }
}
export default useFirebase;