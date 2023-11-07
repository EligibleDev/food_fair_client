import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Foods from "../../pages/Foods/Foods";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";
import Blog from "../../pages/Blog/Blog";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/foods",
                element: <Foods />,
            },
            {
                path: "/food/:id",
                element: <FoodDetails />,
            },
            {
                path: "/blog",
                element: <Blog/>
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default MainRouter;
