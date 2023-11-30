import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Mainlayout = () => {
    const location =useLocation() 
    const isrooms = location.pathname.includes('rooms') 
    const issignup =location.pathname.includes('signup')
    const islogin =location.pathname.includes('login')
  
    return (
        <div>
           {
           
              isrooms || issignup||islogin||  <Navbar></Navbar>
            
           }
           <div>
           <Outlet></Outlet>
           </div>
           {
        isrooms || issignup || islogin|| <Footer></Footer>
           }
            
        </div>
    );
};

export default Mainlayout;