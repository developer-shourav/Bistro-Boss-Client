import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main> </Main>,
      children: [
        {
            path:'/',
            element:<Home> </Home>
        },
        {
          path:'menu',
          element:<Menu> </Menu>
        },
        {
          path:'order/:category',
          element:<Order> </Order>
        },
        {
          path:'login',
          element:<Login> </Login>
        },
        {
          path:'register',
          element:<Register> </Register>
        },
        {
          path:'secret',
          element:<PrivetRoutes> <Secret> </Secret></PrivetRoutes>
        },
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard> </Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }
      ]
    }
  ]);
  