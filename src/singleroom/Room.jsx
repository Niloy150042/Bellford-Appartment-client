import { useContext } from "react";
import { FaWpforms } from "react-icons/fa6";
import { Authcontext } from "../FIrebase/Authprovider";
import useAxiossecure from "../Hooks/useAxiossecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Room = ({rooms}) => {
  const navigate =useNavigate()
  const {user} =useContext(Authcontext)
  const axiossecure =useAxiossecure()


  // if(user.displayName =='null'){
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "log-in first!",
  //     footer: '<a href="#">Why do I have this issue?</a>'
  //   });
  //   navigate('/login')
  // }

  
    const{image,_id, floor , Blockname, Apartmentno,Rent,status}=rooms

    const hanldesubmit=(e)=>{
      e.preventDefault()
      const date= e.target.date.value 
      console.log(date);
   
      const agreementifo ={
      Date: date, name: user?.displayName ,email:user.email ,photo:user.photoURL ,floor,Blockname,Apartmentno,Rent,status,date ,role:'user'
        
     }
     

     axiossecure.post('/roombyagreement',agreementifo)
     .then(res=>{
      console.log(res);
      if(res.status)
      {
        Swal.fire({
           title: "Good job!",
          text: "Room is taken successfully according to agreement ! Go to dashboard to see",
          icon: "success"
        });
        navigate('/' )

      }
     })
     .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please Log-in first!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      navigate('/login')
     })
 
   }
  
   

    return (
       <form onSubmit={hanldesubmit}>
         <div className="card  bg-base-100 shadow-xl rounded-xl ">
        <div className="lg:flex md:flex" >
        <figure><img className="h-[250px] lg:h-[320px] md:h-[370px] rounded-xl w-[450px] lg:w-[370px]" src={image}alt="Shoes" /></figure>
        <div className="card-body bg-gray-200 ">
          <h2 className="card-title font-cinzel font-bold text-xl"> Block-name : {Blockname}</h2>
          <p className="font-Roboto text-xl font-bold" >Appartment-No :  {Apartmentno}</p>
          <p className="font-poppins font-bold" >FLoor :   {floor}</p>

          <p className="font-poppins font-bold text-orange-400" >Rent :   {Rent} $  </p>
          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div> 

    <input required type="date" name="date" id="" /> 
      
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Agreement <FaWpforms/></button>
          </div>
        </div>
        </div>
      </div>
       </form>
    );
};

export default Room;