import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner />{" "}
            </div>
        );
    } else if (!user?.email) {
        return <Navigate state={location.pathname} to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;
