
import Swal from "sweetalert2";
import useAxiossecure from "../Hooks/useAxiossecure";
import Sectiontitle from "../components/Sectiontitle";


const Make_announcements = () => {
    const axiossecure = useAxiossecure()
    const hanldesubmit=(e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        console.log(title,description);
        const announcement ={
            title,description
        }
        axiossecure.post('/announcement',announcement)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Announcement created successfuly!",
                    icon: "success"
                  });
            }
        })
        .catch(error=>{
            console.log(error);
        })

     }
    return (
        <div>
            <div className="w-[300px] mx-auto underline">
            <Sectiontitle heading={'Create announcement ->'} subheading={''} ></Sectiontitle>
            </div>
           <div className="lg:w-[800px] md:w-[600px] bg-orange-400 p-5">
           <form onSubmit={hanldesubmit} className="flex flex-col gap-5">
                <input className="w-[full]  border border-solid border-orange-400 rounded-md p-3" type="text"  name="title" placeholder="Title"/>
                <textarea name="description" placeholder="Description" className="rounded-md p-2" cols="30" rows="10"></textarea>
                <button className="btn btn-warning py-3 text-white" >Create</button>
            </form>
           </div>


        </div>
    );
};

export default Make_announcements;