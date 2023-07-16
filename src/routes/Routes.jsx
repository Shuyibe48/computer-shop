import { createBrowserRouter, } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cart from "../pages/usual_pages/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


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
            }
        ]
    },
]);

export default router