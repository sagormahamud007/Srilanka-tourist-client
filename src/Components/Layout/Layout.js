import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shere/Navbar';


const Layout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;