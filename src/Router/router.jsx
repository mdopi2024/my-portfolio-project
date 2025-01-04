import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainlayOut/MainlayOut";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);
  export default router