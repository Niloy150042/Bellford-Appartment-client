import useRooms from "../Hooks/useRooms";
import useAgreementrequest from "./useAgreementrequest";


const Admin_profile = () => {
    const [agreementbyroom] = useAgreementrequest()
    const [rooms]=useRooms()
    console.log(agreementbyroom);
    const adminprofileinfo = agreementbyroom?.filter(info=>info.role ==='Admin')
    const totalusers = agreementbyroom?.filter (info=>info.role ==='user')
    const totalmember = agreementbyroom?.filter(info=>info.role==='member')
    const  bookedroom =  (parseInt(agreementbyroom.length)/ parseInt(rooms.length)) *100
    const Bookedroom =bookedroom.toFixed(2)



    
    

 

    return (
        <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-center" >
          <tr>
            
            <th>image</th>
            <th> Admin-Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Total-rooms</th>
            <th>Total-users</th>
            <th>Total-members</th>
            <th>Booked-room</th>
            <th>available-rooms</th>
            


            
            
          </tr>
        </thead>
        <tbody className="text-center font-bold text-blue-700">
          {/* row 1 */}
          {
              adminprofileinfo?.map((information ) =><tr key={information._id}>   
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
                  
                  <td>{rooms.length} Rooms </td>
                  <td>{totalusers.length}  </td>
                  <td>{totalmember.length}  </td>
                  <td>{Bookedroom} % </td>
                  <td>{100-Bookedroom} %  </td>
           
           
                  
                  
      
    
       
                  
                  
                </tr>)
          }
       
   
        </tbody>
       
      
        
      </table>
    </div>
    );
};

export default Admin_profile;