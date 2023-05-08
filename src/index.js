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
  //  {

    // path: "/about",
    // element:<About/>,
  // },
  {
    path:"/Contact",
    element:<Contact/>
  }
 
  
]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <RouterProvider router={router} />

   );
