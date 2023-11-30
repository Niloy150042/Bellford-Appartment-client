import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Hooks/useAxiossecure";


const useAgreementssrequest = () => {

    const axiossecure =useAxiossecure()

    const {refetch, data: agreemtbyroomss =[]} =useQuery({
        queryKey :["roombyagreementss"],
        queryFn: async()=>{
            
            const res =await axiossecure.get('/roombyagreementss')
            return res.data

        }
      
    })
    return [agreemtbyroomss,refetch];
};

export default useAgreementssrequest;