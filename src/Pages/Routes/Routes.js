import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Segment from "../BusinessSegment/Segment";
import CatrgoryDetails from "../BusinessSegment/CatrgoryDetails";
import WrongRoute from "../Shared/ErrorDisplay/WrongRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/services',
                element: <Segment></Segment>
            },
            {
                path: '/categoryDetails',
                element: <CatrgoryDetails></CatrgoryDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <WrongRoute></WrongRoute>
            },
        ]
    }
])

export default router;