import { Link, useParams } from "react-router-dom";
import useAgreementssrequest from "../Dashboard/useAgreementssrequest";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Authcontext } from "../FIrebase/Authprovider";
import useAxiossecure from "../Hooks/useAxiossecure";
import Sectiontitle from "../components/Sectiontitle";

const Make_payment = () => {
    const {user}=useContext(Authcontext)
    const axiossecure =useAxiossecure()

    const [matchinginfo ,setmatchinginfo]=useState({})

    
useEffect(()=>{
    axiossecure.get(`/memberprofile?email=${user.email}`)
    .then(res=>{
        if(res.data.role==='member'){
            setmatchinginfo(res.data)
        }
       
    })
},[axiossecure,user.email])

    console.log(matchinginfo);
    
    const handlesubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <div>
             <form  onSubmit={handlesubmit} className="bg-orange-100 lg:w-[700px]" >
                <Sectiontitle heading={'Make Your payment'} subheading={''} ></Sectiontitle>
                
                
                <div className="flex flex-col  text-center lg:text-start ">
                    <label className="font-bold text-xl font-Roboto" > Member email : </label>
                <input readOnly className="border  border-solid border-orange-300 p-1 rounded-md mt-2 w-[50%] mx-auto lg:mx-0" defaultValue={matchinginfo.email} type="text"  />
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row gap-3 text-center lg:text-start">
                  <div className="flex flex-col w-[50%] mx-auto" >
                  <label className="font-bold text-xl font-Dosis mt-2">
                       Floor : 
                   </label>
                   <input readOnly type="text" defaultValue={matchinginfo.floor} className="border border-solid border-orange-300 p-1 rounded-md mt-2 w-full " />
                  </div>

                  <div className="flex flex-col w-[50%] text-centerlg:text-start mx-auto" >
                  <label className="font-bold text-xl font-Dosis mt-2">
                       Blockname : 
                   </label>
                   <input readOnly type="text" defaultValue={matchinginfo.Blockname}  className="border border-solid border-orange-300 p-1 rounded-md mt-2 w-full " />
                  </div>

                </div >
                <div className="flex flex-col lg:flex-row md:flex-row gap-3 text-center lg:text-start">
                  <div className="flex flex-col w-[50%] mx-auto" >
                  <label className="font-bold text-xl font-Dosis mt-2">
                       Appartment-no : 
                   </label>
                   <input readOnly type="text" defaultValue={matchinginfo.Apartmentno}   className="border border-solid border-orange-300 p-1 rounded-md mt-2 w-full " />
                  </div>

                  <div className="flex flex-col w-[50%] text-centerlg:text-start mx-auto" >
                  <label className="font-bold text-xl font-Dosis mt-2">
                       Rent :  $ 
                   </label>
                   <input readOnly type="text"  defaultValue={matchinginfo.Rent}  className="border border-solid border-orange-300 p-1 rounded-md mt-2 w-full " />
                  </div>

                </div >
                <div className="flex flex-col text-centerlg:text-start mx-auto" >
                  <label className="font-bold text-xl font-Dosis mt-2">
                       Date : 
                   </label>
                   <input type="date" className="border border-solid border-orange-300 p-1 rounded-md mt-2 w-full my-3 " />
                  </div>
               <Link to={'/dashboard/payment'} ><button className="btn btn-warning w-full py-2" >Pay</button></Link>

             </form>
           
        </div>
    );
};

export default Make_payment;