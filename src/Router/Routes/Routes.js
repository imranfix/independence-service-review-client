import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home.js/Home";
import ServiceAll from "../../Pages/Home/Services/ServiceAll";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from '../../Pages/Blog/Question/Questions';
import ServiceInfo from "../../Pages/ServiceInfo/ServiceInfo";
import Orders from "../../Pages/Orders/Orders";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Review from "../../Pages/Orders/Review";



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
        },
        {
            path: '/serviceInfo/:id',
            element: <PrivateRouter>
                <ServiceInfo></ServiceInfo>
            </PrivateRouter>,
            loader: ({params}) => fetch(`https://independence-service-review-server.vercel.app/services/${params.id}`)
        },
        
        {
            path: '/orders',
            element: <PrivateRouter>
                <Orders></Orders>
            </PrivateRouter>
        },

        {
            path: '/review/:id',
            element: <Review></Review>,
            loader: ({params}) => fetch(`https://independence-service-review-server.vercel.app/reviews/${params.id}`)
        }


      ]
    },

    {
        path: '*',
        element: <div className="text-center mt-12"> <h1><span className="text-5xl text-orange-600">Sorry!!</span> This route is not Found <br />
            <span className="text-5xl">404</span>
        </h1></div>
    }

]);

export default router;