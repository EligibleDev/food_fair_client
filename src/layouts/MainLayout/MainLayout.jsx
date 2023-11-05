import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div style={{backgroundImage: `url('bg.jpg')`}} className="min-h-screen bg-center bg-fixed">
            <Toaster/>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    );
};

export default MainLayout;
