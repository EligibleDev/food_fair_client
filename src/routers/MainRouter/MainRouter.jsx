import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Foods from "../../pages/Foods/Foods";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";
import Blog from "../../pages/Blog/Blog";
import Profile from "../../pages/Profile/Profile";
import MyAddedFoods from "../../pages/MyAddedFoods/MyAddedFoods";
import MyOrderedFoods from "../../pages/MyOrderedFoods/MyOrderedFoods";
import AddFood from "../../pages/AddFood/AddFood";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import PurchaseFood from "../../pages/PurchaseFood/PurchaseFood";

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
                path: "/purchase_food/:id",
                element: <PurchaseFood />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
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
    {
        path: "/profile",
        element: <Profile />,
        children: [
            {
                index: true,
                element: (
                    <PrivateRoute>
                        <MyAddedFoods />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile/my_ordered_foods",
                element: <MyOrderedFoods />,
            },
            {
                path: "/profile/add_food",
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default MainRouter;
