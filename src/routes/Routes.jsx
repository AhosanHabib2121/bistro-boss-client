import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import UserHome from "../pages/dashboard/userHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element: <Home/>
      },
      {
        path: 'menu',
        element:<Menu/>
      },
      {
        path: 'order/:category',
        element: <Order/>
      },
      {
        path: 'login',
        element:<Login/>
      },
      {
        path: 'register',
        element:<Register/>
      },
      {
        path: 'secret',
        element: <PrivateRoutes><Secret/></PrivateRoutes>
      }
    ]
  },
  {
    path: '/dashboard',
    element:<Dashboard/>,
    children: [
      {
        path:'userHome',
        element: <UserHome/>
      },
      {
        path: 'cart',
        element: <Cart/>
      }
    ]
  }
]);