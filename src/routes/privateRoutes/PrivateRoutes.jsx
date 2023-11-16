import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation()

    if (loading) {
        return <progress className="progress progress-success w-56"></progress>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace>Login</Navigate>
};

export default PrivateRoutes;