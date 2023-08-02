import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../LayOut/Main";
import Menu from "../Page/Menu/Menu/Menu";
import Order from "../Page/Order/Order/Order";


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
        }
       
      ]
    },
  ]);