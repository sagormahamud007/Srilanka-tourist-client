import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import UseAdmin from '../CustomHooks/UseAdmin';


const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [admin, adLoading] = UseAdmin(user?.email)

    if (loading || adLoading) {
        <progress className="progress w-56"></progress>
    }

    if (user && admin) {
        return children;
    }

    return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;

};

export default AdminRouter;