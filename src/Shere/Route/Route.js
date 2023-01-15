import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import Home from "../../Pages/Home/Home";

import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/Login";
import AdminAddData from "../../Pages/AdminAddData/AdminAddData";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import MyCardData from "../../Pages/AdminAddData/MyCardData";



 export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: ([
        {
            path: '/',
            element: <Home></Home>
        },
      
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:"/adminAddData",
            element:<PrivateRoute><AdminAddData></AdminAddData></PrivateRoute>
        },
        {
            path:'/bookingData',
            element:<MyCardData></MyCardData>
        }
    ]),
    
 },
]);