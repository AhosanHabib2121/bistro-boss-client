import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";

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
      }
    ]
  },
]);