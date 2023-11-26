import { MdCoPresent } from "react-icons/md";
import Sectiontitle from "./Sectiontitle";
import { HiHomeModern } from "react-icons/hi2";
import { FaServicestack } from "react-icons/fa6";
import { MdStreetview } from "react-icons/md";
import pic from '../assets/Pictures/about section pic/images.jpg'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";


const About = () => {
    return (
  
       <div>
          <Sectiontitle heading={'About Building '} subheading={'we always provide the best booking faclities'} > </Sectiontitle>

           <div className="lg:w-[700px] md:w-[500px] mx-auto text-center py-7 text-xl">
                
                <p className=" font-poppins">We always provide the <span className="text-orange-500  font-bold">Modern designing </span> buildings and rooms for out happy customers . besides we always try to give seasonal offer to our customers. now we have <span className="text-red-500  font-bold text-xl font-Roboto" >250 Rooms</span> in which there are <span className="text-red-500 font-bold text-2xl font-cinzel" >140 super delux </span> and <span className="text-red-500  font-bold text-xl font-Roboto" >40 Common rooms</span> and others are social and amuzement purposes </p>
                
           </div>

           <p className="flex justify-center"><img src={pic} className="h-[300px] rounded-3xl py-3 " alt="" /></p>

           <Link className="flex justify-center py-4" > <p className="btn  text-white  btn-warning " > See more details of building <FaArrowAltCircleRight/> </p> </Link>
           <Sectiontitle heading={'Our Features'} subheading={'--Explore our wonderful features--'}></Sectiontitle>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1000px] mx-auto gap-4" >
             <div className="border border-orange-400 border-solid p-10 rounded-xl text-center" >
             <p className="flex justify-center text-3xl text-orange-400 py-3"><MdCoPresent /></p>
             <p className="text-2xl font-Roboto ">Fast bookings</p>

             </div>

             <div className="border border-orange-400 border-solid p-10 rounded-xl text-center" >
                <p className="flex justify-center text-3xl text-orange-400 py-3" ><HiHomeModern/></p>
                <p className="text-2xl font-Roboto " >Modern Room</p>


             </div>
             <div className="border border-orange-400 border-solid p-10 rounded-xl text-center" >
                <p className="flex justify-center text-3xl text-orange-400 py-3" ><FaServicestack/></p>
                <p className="text-2xl font-Roboto " >Good Services</p>

             </div>

             <div className="border border-orange-400 border-solid p-10 rounded-xl text-center" >
                <p className="flex justify-center text-3xl text-orange-400 py-3"  ><MdStreetview/></p>
                <p className="text-2xl font-Roboto  "> Awesome views</p>
             </div>
           </div>

       </div>
   



    );
};

export default About;