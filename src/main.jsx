import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/My_route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const querylcient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={querylcient} >
    <div className='max-w-7xl mx-auto bg-slate-100' >
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
