
import Swal from "sweetalert2";
import useAgreementssrequest from "../Dashboard/useAgreementssrequest";
import useAxiossecure from "../Hooks/useAxiossecure";
import { ImCross } from "react-icons/im";


const Manage_members = () => {

    const axiossecure =useAxiossecure()
   const [agreemtbyroomss,refetch]= useAgreementssrequest()
   console.log(agreemtbyroomss);

    console.log(agreemtbyroomss);
    const usermember = agreemtbyroomss?.filter(info=>info.role === 'member')

    

    const handleupdate=(id)=>{

        axiossecure.patch(`/roombyagreementss/${id}`)
        .then(result=>{
          console.log(result.data);
         
          Swal.fire({
            title: "Good job!",
            text: "This member is User now!",
            icon: "success"
          });
          refetch()
         
        })
        .catch(error=>{
          console.log(error);
        })
    }
   
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center" >
            <tr>
              
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th> 
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody className="text-center font-bold">
            {/* row 1 */}
            {
                usermember?.map((information ) =><tr key={information._id}>
                   
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={information.photo}/>
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                    {information.name}
                      <br/>
                   
                    </td>
                    <td>{information.email}</td>
                    <td>{information.role}</td>
                     <td><button onClick={()=>handleupdate(information._id)} className="btn btn-outline btn-warning"> Remove <ImCross/> </button></td>
                    
                  </tr>)
            }
         
     
          </tbody>
         
        
          
        </table>
      </div>
    );
};

export default Manage_members;