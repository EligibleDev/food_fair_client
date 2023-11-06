import PropTypes from "prop-types";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner color="amber" className="h-16 w-16 " />
            </div>
        );
    }

    if (!user?.email) {
        return <Navigate state={location.pathname} to="/login-register/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;
