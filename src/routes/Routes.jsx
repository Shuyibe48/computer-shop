import { createBrowserRouter, } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../pages/Dashboard/AddProduct";
import MyProducts from "../pages/Dashboard/MyProducts";
import Update from "../pages/Dashboard/Update";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signUp",
                element: <SignUp />
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`)
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: "dashboard/addAProduct",
                element: <AddProduct />
            },
            {
                path: "dashboard/myProducts",
                element: <MyProducts />
            },
        ]
    },
]);

export default router