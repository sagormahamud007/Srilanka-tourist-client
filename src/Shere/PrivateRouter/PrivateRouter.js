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
        return <div className='flex justify-center py-60 relative mt-44'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return <Navigate to={'/signIn'} 
    state={{from:location}} replace></Navigate>
};

export default PrivateRoute;