import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Root";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element: <Home/>
        }
    ]
  },
]);