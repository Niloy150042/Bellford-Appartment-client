import { Link } from "react-router-dom";
import logo from '../assets/Pictures/logo.jpg'



const Navbar = () => {
    const navitems =<>

  <div className="lg:flex gap-5 text-white" >
  <Link><p className=" text-xl font-Roboto hover:border-b-2  hover:border-b-orange-400" ><a>Home</a></p></Link>
    <Link><p className=" text-xl font-Roboto  hover:border-b-2  hover:border-b-orange-400" ><a>Appartment</a></p></Link>
    <Link><p className=" text-xl font-Roboto hover:border-b-2  hover:border-b-orange-400" ><a>Sign-up</a></p></Link>
  </div>
  
    </>
    return (
        <div className="navbar lg:fixed  z-10 lg:max-w-7xl bg-black  bg-opacity-50 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-orange-400 text-black rounded-box w-52">
             {navitems}
            </ul>
          </div>
         <div className="flex gap-3 items-center" >
            <img src={logo} className="h-[80px] w-[80px] rounded-full " alt="" />

        <Link> <a className="font-cinzel  text-white font-bold text-3xl  hover:underline ">BellFord</a></Link>

         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navitems}
          </ul>
         
          
          
        </div>
        <div className="navbar-end" >
          <a className="btn btn-outline border border-solid border-orange-500 text-white">Log-in</a>
        </div>
      </div>
    );
};

export default Navbar;