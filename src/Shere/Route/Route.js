import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import Home from "../../Pages/Home/Home";

import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/Login";
import AdminAddData from "../../Pages/AdminAddData/AdminAddData";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import DashboardLayout from "../../Pages/Dashboard/DashboardLayout";
import ErrorPage from "../../Pages/Dashboard/ErrorPage";
import MyCardData from "../../Pages/AdminAddData/MyCardData";
import TouristDetails from "../../Pages/TouristDetails/TouristDetails";




 export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
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
            path:'Details/:id',
            element: <PrivateRoute><TouristDetails></TouristDetails></PrivateRoute>,
            loader: ({ params }) =>fetch (`http://localhost:5000/cartData/${params.id}`)
        }
      
    ]),
    
 },
 {
    path: '/dashboard',
    element: <PrivateRoute>
<DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
       {
        path:'/dashboard',
       element:<MyCardData></MyCardData>
       },
       {
        path:"/dashboard/adminAddData",
        element:<AdminAddData></AdminAddData>
    },
    ]
}

]);