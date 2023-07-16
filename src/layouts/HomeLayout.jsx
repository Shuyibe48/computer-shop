import { Outlet } from "react-router-dom";
import Footer from "../components/Share/Footer";
import Menubar from "../components/Share/Menubar";
import Home from "../pages/Home/Home";

const HomeLayout = () => {
    return (
        <div>
            <Menubar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;