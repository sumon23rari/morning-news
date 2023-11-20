import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/logIn/LogIn";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const routers=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
              path:'/',
              element: <Home></Home>,
              loader:()=>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
   
])

export default routers;