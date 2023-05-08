import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pro from "./components/projectInfo";
import About from "./components/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './components/test';



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
    element:<About/>,
  },
  //  {

    // path: "/about",
    // element:<About/>,
  // },{
  //   path:"/test",
  //   element:<Test/>
  // }
 
  
]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <RouterProvider router={router} />

   );
