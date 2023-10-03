// PrivateRoute.js
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ path, ...props }) => {
    const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Route path={path} {...props} />;
};

export default PrivateRoute;
