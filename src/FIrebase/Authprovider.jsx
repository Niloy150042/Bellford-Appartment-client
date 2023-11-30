import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase.init";
import useAxiossecure from "../Hooks/useAxiossecure";
const provider = new GoogleAuthProvider();
const Provider = new FacebookAuthProvider();

const auth = getAuth(app);

export const  Authcontext = createContext()


const Authprovider = ({children}) => {
    const [user,setuser]=useState([])
    const [loading ,setloading]=useState(true)
    const axiossecure =useAxiossecure()

    const signupuser =(email,password )=>{
      return   createUserWithEmailAndPassword(auth,email ,password )

    }

    const signinuser =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signinwithgoogle =()=>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }

    const signinwithfacebook =()=>{
        return signInWithPopup(auth,Provider)
    }
    const updateuserprofile =(displayName,photoURL)=>{
        setloading(true)
        return updateProfile(auth.currentUser,{
            photoURL:photoURL,displayName:displayName
        })
    }
    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }

    const authinfo ={
        signupuser,signinuser,signinwithgoogle,signinwithfacebook,user,updateuserprofile,loading,logout

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentuser)=>{
        
            console.log(currentuser);
                 setuser(currentuser)
           
                 const userinfo ={
                    email :currentuser.email
                 }
              
               if(currentuser){
                  axiossecure.post('/JWT',userinfo)

                  .then(res=>{
                    console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem('acces-token',res.data.token)
                    }
                  })

               }
               else{
                   localStorage.removeItem('acces-token')
               }
                 setloading(false)

        

        })
        return ()=>{
            return unsubscribe 
        }
    },[])

    return (
        <Authcontext.Provider value={authinfo} >
            {children}
        </Authcontext.Provider >
    );
};

export default Authprovider;