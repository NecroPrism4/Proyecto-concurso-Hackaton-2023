import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'
import LeftsideNavbar from "./components/leftsideNavbar";
import Dashboard from './components/dashboard'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:<LeftsideNavbar/> ,
    children: [ {
      path: "dashboard/",
      element:<Dashboard/> ,
    },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
