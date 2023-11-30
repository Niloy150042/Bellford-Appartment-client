import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Hooks/useAxiossecure";

const useAgrimentrequest = () => {
    const axiossecure =useAxiossecure()
    const {refetch,data: agreemtbyrooms =[]} =useQuery({
        queryKey :["roombyagreement"],
        queryFn: async()=>{
            
            const res =await axiossecure.get('/roombyagreements')
            return res.data

        }
      
    })
    return [agreemtbyrooms,refetch];
};

export default useAgrimentrequest;