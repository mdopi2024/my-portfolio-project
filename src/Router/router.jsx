import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainlayOut/MainlayOut";
import Home from "../Pages/Home/Home";
import ProjectsDetailsData from "../Pages/ProjectDetails/ProjectsDetailsData";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/details/:id',
            element:<ProjectsDetailsData></ProjectsDetailsData>
        }
      ]
    },
  ]);
  export default router