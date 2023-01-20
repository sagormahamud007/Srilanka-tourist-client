import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../CustomHook/UseAdmin';
import Navbar from '../../Shere/Navbar';
import { AuthContext } from '../../AuthContext/ContextProvider';

const DashboardLayout = () => {
    const {user}=useContext(AuthContext)
    const [admin] = UseAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>

                      
                             {
                            admin && <>
                                 <li><Link to='/dashboard/adminAddData'>Admin Add tourist</Link></li>
                            </>
                        }
                        <li><Link to='/dashboard/myProduct'>My Product</Link></li>
                        <li><Link to=''>All Seller</Link></li>
                        <li><Link to=''>All Bayer</Link></li>
                      
                      
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;