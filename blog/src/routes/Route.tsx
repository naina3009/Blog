import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../screens/auth/login/LoginScreen";
import Register from "../screens/auth/register/Register";
import App from "../App";
import Home from "../screens/home/Home";
import SingleBlog from "../screens/blog/single-blog/SingleBlog";
import CreateBlog from "../screens/blog/CreateBlog";


const routes = createBrowserRouter([
    {
        path :"/",
        element :<App/>,
        children:[
            {
                index:true,
                element :<LoginScreen/>
            },
            {
                path :"/register",
                element :<Register/>
            },
            {
                path :"/home",
                element :<Home/>
            },
            {
                path :"/single-page/1",
                element :<SingleBlog/>
            },
            {
                path :"/create-blog",
                element :<CreateBlog/>
            }
        ]
    },
   
])
export default routes;