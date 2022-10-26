import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import News from "../Components/Pages/News/News";
import Profile from "../Components/Pages/Profile/Profile";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }

        ]
    }

]);