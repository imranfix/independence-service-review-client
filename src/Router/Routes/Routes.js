import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home.js/Home";
import ServiceAll from "../../Pages/Home/Services/ServiceAll";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from '../../Pages/Blog/Question/Questions';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/serviceAll',
            element: <ServiceAll>
            </ServiceAll>
        },
        {
            path: '/blog',
            element: <Blog></Blog>

        }


      ]
    },

]);

export default router;