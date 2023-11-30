import { useEffect, useState } from "react";
import useAxiossecure from "../Hooks/useAxiossecure";
import Sectiontitle from "../components/Sectiontitle";


const Announcements = () => {
    const [announcement,setannouncement]=useState([])
    const axiossecure =useAxiossecure()
    useEffect(()=>{
        axiossecure.get('/announcement')
        .then(result=>{
            const announcement =result.data
            setannouncement(announcement)
            console.log(announcement);
        })
        .catch(error=>{
            console.log(error);
        })
   

    },[axiossecure])
    return (
        <div className="flex justify-center gap-3" >
           <div>
           <Sectiontitle heading={'*Announcement*'} subheading={'Annoncement by owner ---> '} >

           </Sectiontitle>
                {
                    announcement?.map(info=> <div className="bg-slate-200 lg:w-[700px] rounded-md p-8 text-center" key={info._id}>
                           
                           <p className="text-xl font-poppins text-orange-500" >Title : {info.title}</p>
                           <p>Description :{info.description}</p>

                    </div> )
                }
           </div>
            
        </div>
    );
};

export default Announcements;