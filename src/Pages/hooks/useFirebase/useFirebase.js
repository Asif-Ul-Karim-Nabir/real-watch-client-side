import  { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeFirebase from '../../Login/Firebase/firebase.init';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin ,setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password,name,history) => {
        setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const user = result.user;
        setUser(user)
        saveUser(email,name,'POST')
        history.replace('/')
        setError('')
        console.log(user);
    })
    .catch((error) => {
        setError(error.message)
        console.log(error);
    })
    .finally(()=> setIsLoading(false))
    }
    const logInUser = (email,password,location,history) =>{
        setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)    
        setError('')
    })
    .catch((error) => {
        setError(error.message)
    })
    .finally(()=> setIsLoading(false))
    }

    useEffect(()=>{
        fetch(`https://peaceful-journey-32516.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
    },[user?.email])

    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth,(user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        }))
        return () => unsubscribe
    },[auth])
    const signInUsingGoogle = (location,history) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user = result.user;
        saveUser(user.email,user.displayName,'PUT')
        setUser(user)
        const destination = location?.state?.from || '/'
        history.replace(destination)
        setError('')
        console.log(user);
    }).catch((error) => {
        
    });
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false))
    }
    
    const saveUser = (email,displayName,method)=>{
        const user= {email,displayName}
        fetch('https://peaceful-journey-32516.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        error,
        isLoading,
        admin,
        registerUser,
        logInUser,
        signInUsingGoogle,
        logOut,
    }
};

export default useFirebase;