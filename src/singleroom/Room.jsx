import { FaWpforms } from "react-icons/fa6";

const Room = ({rooms}) => {
  
    const{image,_id, floor , Blockname, Apartmentno,Rent,status}=rooms
    return (
        <div className="card  bg-base-100 shadow-xl rounded-xl ">
        <div className="lg:flex md:flex" >
        <figure><img className="h-[250px] lg:h-[280px] md:h-[370px] rounded-xl lg:w-[350px]" src={image}alt="Shoes" /></figure>
        <div className="card-body bg-gray-200 ">
          <h2 className="card-title font-cinzel font-bold text-xl"> Block-name : {Blockname}</h2>
          <p className="font-Roboto text-xl font-bold" >Appartment-No :  {Apartmentno}</p>
          <p className="font-poppins font-bold" >FLoor :   {floor}</p>
          <p className="font-poppins font-bold text-orange-400" >Rent :   {Rent} $  </p>
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Agreement <FaWpforms/></button>
          </div>
        </div>
        </div>
      </div>
    );
};

export default Room;