import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/ContextProvider';




const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location=useLocation();

    if(user){
        return children;
    }

    if(loading){
        return <h3>Loading...</h3>
    }

    return <Navigate to={'/signIn'} 
    state={{from:location}} replace></Navigate>
};

export default PrivateRoute;