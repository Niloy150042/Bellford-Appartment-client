import useAgreementrequest from "./useAgreementrequest";
import { IoMdCloudDone } from "react-icons/io";
import { ImCross } from "react-icons/im";
import useAxiossecure from "../Hooks/useAxiossecure";
import Swal from "sweetalert2";




const Agreementrequest = () => {
   
    const axiossecure=useAxiossecure()
    
 

    const [agreemtbyroom ,refetch ]=useAgreementrequest()
    
    const hanldeupdate=(id)=>{
       
        axiossecure.patch(`/roombyagreement/${id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
            if(res.data.modifiedCount >0){
              Swal.fire({
                title: "Good job!",
                text: "updated successfuly",
                icon: "success"
              });

            }
            
    })
    .catch(error=>{
        console.log(error);
    })

     

    }

    const handleupdaterole =(id)=>{
      
      axiossecure.patch(`/roombyagreements/${id}`)
      .then(res=>{
          console.log(res.data)
          refetch()
          if(res.data.modifiedCount >0){
            Swal.fire({
              title: "Good job!",
              text: "Updated successfully!",
              icon: "success"
            });

          }

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
            <th> Agreement-date</th>
            <th> Status</th>
            <th>Floor</th>
            <th>Blcokname</th>
            <th>Rent</th>
            <th>Action</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody className="text-center font-bold">
          {/* row 1 */}
          {
              agreemtbyroom?.map((information ) =><tr key={information._id}>
                 
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
                  <td>
                       {information.date}
                  </td>
                  <td>
                       {information.status}
                  </td>
                  <td> {information.floor}</td>
                  <td> {information.Blockname}</td>
                  <td> {information.Rent } $ </td>
                  <td  > <button onClick={()=>hanldeupdate(information._id)}  className="btn btn-warning flex" >Accept<IoMdCloudDone /> </button>  </td>
                  <td> <button onClick={()=>handleupdaterole(information._id)}  className="btn btn-warning" >Reject <ImCross/> </button>  </td>
                </tr>)
          }
       
   
        </tbody>
       
      
        
      </table>
    </div>
    );
};

export default Agreementrequest;