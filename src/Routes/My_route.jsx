import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";
import Rooms from "../Appartments/Rooms";
import Signup from "../Authentication/Signup";
import Login from "../Authentication/Login";
import Errorpage from "../Errorpage/Errorpage";
import Dashboard from "../Dashboard/Dashboard";
import Myprofile from "../Dashboard/Myprofile";
import Announcements from "../Dashboard/Announcements";
import Admin_profile from "../Admin/Admin_profile";
import Manage_cuppons from "../Admin/Manage_cuppons";
import Manage_members from "../Admin/Manage_members";
import Make_announcements from "../Admin/Make_announcements";
import Agreementrequest from "../Admin/Agreementrequest";
import Memberprofile from "../Member/Memberprofile";
import Make_payment from "../Member/Make_payment";
import Paymenthistory from "../Member/Paymenthistory";
import Payment from "../Member/Payment";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/rooms',
          element:<Rooms></Rooms>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:"/login",
          element:<Login></Login>
          
        },{
          path:'/*',
          element:<Errorpage></Errorpage>
        }
      ]
    },
 
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children :[

        // user access
        {
          path:'myprofile',
          element:<Myprofile></Myprofile>
        },
        {
          path:'announcements',
          element:<Announcements></Announcements>
        },
        // Admin routes
        {
          path:'admin_profile',
          element:<Admin_profile></Admin_profile>
        },
        {
          path:'managemembers',
          element:<Manage_members></Manage_members>
        },
        {
          path:'make_announcement',
          element:<Make_announcements></Make_announcements>,

        },
        {

        path:'agreementrequest',
        element:<Agreementrequest></Agreementrequest>
        },
        {
          path:'cuppons',
          element:<Manage_cuppons></Manage_cuppons>
        },
        // member routes

        {
         path:'memberprofile',
         element:<Memberprofile></Memberprofile>
        },
       
        {
          path:'makepayment',
          element:<Make_payment></Make_payment>

        },

        {
          path:'paymenthistory',
          element:<Paymenthistory></Paymenthistory>
        },


        {
          path:'payment',
          element:<Payment></Payment>
        }

      ]
    }
 

  ]);
  export default router