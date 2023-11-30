import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/My_route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./FIrebase/Authprovider";



const querylcient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <QueryClientProvider client={querylcient}>
    
         
  
          <div className="max-w-7xl mx-auto bg-slate-100">
            <RouterProvider router={router} />
          </div>
          
       
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
);
