import { createBrowserRouter, } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Cart from "../pages/usual_pages/Cart";
import Home from "../pages/Home/Home";


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
            }
        ]
    },
]);

export default router