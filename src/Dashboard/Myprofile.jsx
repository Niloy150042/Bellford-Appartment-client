import { useContext } from "react";
import useMyprofile from "./useMyprofile";
import { Authcontext } from "../FIrebase/Authprovider";


const Myprofile = () => {
    const {user}=useContext(Authcontext)
    const [myprofile] = useMyprofile()
    console.log(myprofile);
    const userinfo = myprofile.filter(info=>info.email== user.email)
    
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center" >
            <tr>
              <th>
               Serial
              </th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th> Agreement-date</th>
              <th>Floor</th>
              <th>Blcokname</th>
              <th>Rent</th>
              
            </tr>
          </thead>
          <tbody className="text-center font-bold">
            {/* row 1 */}
            {
                userinfo?.map((information ,index) =><tr key={information._id}>
                    <th>
                      {index+1}
                    </th>
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
                    <td> {information.floor}</td>
                    <td> {information.Blockname}</td>
                    <td> {information.Rent } $ </td>
                  </tr>)
            }
         
     
          </tbody>
         
        
          
        </table>
      </div>
    );
};

export default Myprofile;