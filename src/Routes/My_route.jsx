import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);
  export default router