import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Main from "../Layout/Main";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            }  ,
            {
                path:'/home',
                element: <Home></Home>,
            }  ,
            {
                path:'/contactus',
                element: <ContactUs></ContactUs>,
            }  ,
           
            
      
           
        ]
    },])
  