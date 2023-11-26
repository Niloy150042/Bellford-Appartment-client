import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";
import Rooms from "../Appartments/Rooms";

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
        }
      ]
    },
  ]);
  export default router