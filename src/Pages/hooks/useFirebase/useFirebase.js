import  { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../../Login/Firebase/firebase.init';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password,history) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const user = result.user;
        setUser(user)
        history.replace('/')
        setError('')
        console.log(user);
    })
    .catch((error) => {
        setError(error.message)
        console.log(error);
    });
    }
    const logInUser = (email,password,location,history) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)    
        setError('')
    })
    .catch((error) => {
        setError(error.message)
    });
    }

    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth,(user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        }))
        return () => unsubscribe
    },[])
    const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user = result.user;
        setUser(user)
        console.log(user);
    }).catch((error) => {
        
    });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        error,
        registerUser,
        logInUser,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;