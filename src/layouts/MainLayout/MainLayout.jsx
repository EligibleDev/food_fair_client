import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <Toaster />
            <Header />
            <div className="-mt-[70px]">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
