import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Hooks/useAxiossecure";
import { useContext } from "react";
import { Authcontext } from "../FIrebase/Authprovider";


const useMyprofile = () => {
    const {user}= useContext(Authcontext)
    const axiossecure = useAxiossecure()
    
    const {data: myprofile =[]} =useQuery({
        queryKey:['myprofile',user?.email ],
        queryFn: async ()=>{
            const res = await axiossecure.get(`/roombyagreement?email=${user.email}`);
            return res.data
        }
    })
    return [myprofile]
   
};

export default useMyprofile;