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
import UpdateFood from "../../pages/UpdateFood/UpdateFood";

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
                element: (
                    <PrivateRoute>
                        <PurchaseFood />
                    </PrivateRoute>
                ),
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
        element: (
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
        ),
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
                element: (
                    <PrivateRoute>
                        <MyOrderedFoods />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile/add_food",
                element: (
                    <PrivateRoute>
                        <AddFood />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile/update_food/:id",
                element: <UpdateFood />,
                loader: ({ params }) =>
                    // fetch(`http://localhost:5000/api/v1/food/${params?.id}`),
                    fetch(
                        `https://assignment-11-server-ten-lyart.vercel.app/api/v1/api/v1/food/${params?.id}`
                    ),
            },
        ],
    },
]);

export default MainRouter;
