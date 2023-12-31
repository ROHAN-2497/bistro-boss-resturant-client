import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Page/Shared/Secret/Secret";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path: 'signin',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
       
      ]
    },
  ]);