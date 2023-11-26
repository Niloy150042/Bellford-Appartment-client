
import { Link } from "react-router-dom";
import useRooms from "../Hooks/useRooms";
import Sectiontitle from "../components/Sectiontitle";
import Room from "../singleroom/Room";
import { FaHome } from "react-icons/fa";


const Rooms = () => {

    const [rooms]=useRooms()

    return (
        <div className="bg-slate-200">

            <Sectiontitle  heading={'"Our Luxurious Appartment"'} subheading={'Please ! hit the agreemnet button if you want to book the room'} ></Sectiontitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-3 gap-4 px-2" >
            {
               
               rooms?.map(room=><Room  key={room._id} rooms ={room}></Room>)
               
            }
        
            </div>
            <div className="flex justify-center py-7">
           
           <Link to={'/'} > <button className="btn btn-warning " > Back to Home  <FaHome/> </button></Link>
          
            </div>

         
        </div>
    );
};

export default Rooms;