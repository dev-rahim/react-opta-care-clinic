import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.init"

const useFirebase = () => {
    const [user, setUser] = useState({})
    InitializeAuthentication()
    const auth = getAuth()
    const emailProvider = createUserWithEmailAndPassword();
    const createUserUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
    }
    const signInWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

            } else {
            }
        });

    }, [])
    return { createUserUsingEmail, signInWithEmailPass, user }
}
export default useFirebase;