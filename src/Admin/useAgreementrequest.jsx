import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Hooks/useAxiossecure";


const useAgreementrequest = () => {
    const axiossecure =useAxiossecure()

        const {refetch,data: agreemtbyroom =[]} =useQuery({
            queryKey :["roombyagreement"],
            queryFn: async()=>{
                const res =await axiossecure.get('/roombyagreement')
                return res.data
         
          
            }
          
        })
        return [agreemtbyroom,refetch];
        

};

export default useAgreementrequest;