import { createContext,useState,useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";
import { auth,googleProvider } from "../config/firebase";

export const authContext=createContext(null)

const AuthContext = ({children}) => {
    const [currentUser,setCurrentUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            setEmail('');
            setPassword("")
            console.log(auth?.currentUser?.email)
        }catch(err){
            console.error(err.message)
        }    
    }
    const handleGoogleLogin = async () => {
        try{
            await signInWithPopup(auth,googleProvider);
            setEmail('');
            setPassword("")
            console.log(auth?.currentUser?.email)
        }catch(err){
            console.error(err.message)
        }    
    }
    const handleLogout = async () => {
        try{
            await signOut(auth);
        }catch(err){
            console.error(err.message)
        }    
    }

    useEffect( () => {
     const userStateChange = async () => {
        try{
          await onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false);
          })
        }catch(err){
          console.error(err.message)
        }
     } 
     userStateChange ()
    },[])

    const value = {currentUser,loading,handleLogin,handleGoogleLogin,handleLogout,setEmail,setPassword,email,password}
  return (
    <authContext.Provider value={value}>
      {
        loading? <h1>Loading.. </h1> : children
      }
    </authContext.Provider>
  )
}

export default AuthContext
