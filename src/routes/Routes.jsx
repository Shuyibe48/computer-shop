import { createBrowserRouter, } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cart from "../pages/usual_pages/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../pages/Dashboard/AddProduct";
import MyProducts from "../pages/Dashboard/MyProducts";


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
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signUp",
                element: <SignUp />
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "dashboard/addAProduct",
                element: <AddProduct />
            },
            {
                path: "dashboard/myProducts",
                element: <MyProducts />
            }
        ]
    }
]);

export default router