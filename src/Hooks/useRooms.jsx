import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";



const useRooms = () => {
    const axiossecure =useAxiossecure()

const {data:rooms =[]} =useQuery({
    queryKey :["rooms"],
    queryFn: async()=>{
        const res =await axiossecure.get('/rooms')
        return res.data 
    }
    
})
return [rooms];

};

export default useRooms;