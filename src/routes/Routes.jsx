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
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItem from "../pages/dashboard/AddItem/AddItem";
import AdminRoutes from "./adminRoutes/AdminRoutes";
import ManageItem from "../pages/dashboard/manageItem/ManageItem";
import ManageItemUpdate from "../pages/dashboard/manageItem/ManageItemUpdate";
import Payment from "../pages/dashboard/payment/Payment";

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
    element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
    children: [
      // user routes here
      {
        path:'userHome',
        element: <UserHome/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'payment',
        element:<Payment/>
      },
      // admin routes here
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUsers/></AdminRoutes>
      },
      {
        path: 'addItem',
        element: <AdminRoutes><AddItem/></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><ManageItem/></AdminRoutes>
      },
      {
        path: 'manageUpdate/:id',
        element: <AdminRoutes><ManageItemUpdate/></AdminRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/menu/${params.id}`)
      }
    ]
  }
]);