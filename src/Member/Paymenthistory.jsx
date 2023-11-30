import { useContext, useEffect, useState } from "react";
import useAxiossecure from "../Hooks/useAxiossecure";
import { Authcontext } from "../FIrebase/Authprovider";


const Paymenthistory = () => {
  const {user}=useContext(Authcontext)
    const axiossecure =useAxiossecure()
    const [paymentinfo,setpaymentinfo]=useState([])
    

      useEffect(()=>{
        axiossecure.get('/paymentinfo')
        .then(res=>{
            
            setpaymentinfo(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
      },[])
      console.log(paymentinfo);
      const memberpaymentinfo = paymentinfo?.filter(information=>information.email === user.email)
      console.log(memberpaymentinfo);


    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center font-thin text-xl">
        <th></th>
        <th>Name</th>
        <th>E-mail</th>
        <th>Transaction-id</th>
        <th>Rent</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
      memberpaymentinfo?.map(info=> <tr key={info._id} className="text-center font-Dosis font-bold" >
      <th>1</th>
      <td>{info.name}</td>
      <td>{info.email}</td>
      <td>{info.
                 Transaction_id}</td>
<td>{info.Amount} $  </td>
    </tr>)
     }

         
    </tbody>
  </table>
</div>
    );
};

export default Paymenthistory;