import { Link } from "react-router-dom";
import { useContext,  } from "react";
import { Authcontext } from "../FIrebase/Authprovider";
import useAxiossecure from "../Hooks/useAxiossecure";
import { useState } from "react";
import { useEffect } from "react";


const Memberprofile = () => {
  
   const {user} = useContext(Authcontext)
   const [member,setmember] =useState({})

  const axiossecure = useAxiossecure()
  console.log(user.email);
   

 
    
  useEffect(()=>{

    axiossecure.get(`/memberprofile?email=${user.email}`)
    .then(res=>{
  
     if(res.data.role ==='member'){
      setmember(res.data)
     }
    })


  },[axiossecure,user.email])

  console.log(member);

  


   
    

    return (
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="font-Dosis text-xl underline text-center">
        <th>Image</th>
        <th>Name</th>
        <th>E-mail </th>
        <th>accept-date</th>
        <th>Floor </th>
        <th>Block </th>
        <th>Role</th>
        <th>Rent </th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="text-center  font-bold  font-Dosis" >
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={member.photo} />
              </div>
            </div>
            
          </div>
        </td>
        <td>
         {member.name}
          
        </td>
        <td>{member.email}</td>
        <td>{member.date}</td>
        <td>{member.floor}</td>
        <td>{member.Blockname}</td>
        <td>{member.role}</td>
        <td>{member.Rent} $ </td>
        <Link to={`/dashboard/makepayment`} ><td> <button className="btn btn-warning" >  Pay $ </button> </td></Link>
        
      </tr >
     
    </tbody>
  
    
  </table>
</div>
    );
};

export default Memberprofile;