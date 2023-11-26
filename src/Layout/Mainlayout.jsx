import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Mainlayout = () => {
    const location =useLocation()
  
    return (
        <div>
           {
           
                location.pathname == '/rooms' ? '':<Navbar></Navbar>
            
           }
           <div>
           <Outlet></Outlet>
           </div>
           {
            location.pathname == '/rooms' ? '':<Footer></Footer> 
           }
            
        </div>
    );
};

export default Mainlayout;