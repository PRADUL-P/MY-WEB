import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pro from "./components/portfolio";
import About from "./components/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './components/test';
import Contact from './components/contact';
import Model from './components/model';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {

    path: "/my-web",
    element:<App/>,
  },
  {

    path: "/portfolio",
    element:<Pro/>,
  },
   {

    path: "/model",
    element:<Model/>,
  },
  {
    path:"/Contact",
    element:<Contact/>
  }
 
  
]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <RouterProvider router={router} />

   );
