import { useContext } from "react";
import { Authcontext } from "../FIrebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const location =useLocation()
    const {user}=useContext(Authcontext)
   if(user){
    return children
   }
   return <Navigate to={'/login'} state={{from:location}} ></Navigate>
};

export default Privateroute;