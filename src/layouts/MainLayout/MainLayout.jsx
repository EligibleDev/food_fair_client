import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackToTop from "../../components/BackToTop/BackToTop";

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="-mt-[70px]">
                <Outlet />
                <Footer />
            </div>
            <BackToTop />
        </div>
    );
};

export default MainLayout;
