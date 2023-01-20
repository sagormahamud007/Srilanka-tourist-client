import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/ContextProvider';

const Navbar = () => {
  

  const { user, logOut } = useContext(AuthContext)
  const userLogOut = () => {
      logOut()
          .then(result => {

          })
          .catch(() => {

          })
  }

  const menuItems = <>
  <li><Link to={"/"}>Home</Link></li>
      <li><Link>Discover</Link></li>
      <li><Link>History</Link></li>
  {
      user?.email && <li><Link to='/dashboard'>Dashboard</Link></li>
  }
    
      {
            user?.uid ?
                <>
                    <li><button className='btn btn-outline' onClick={userLogOut}>Sign Out</button></li>
                </>
                :
                <li><Link to='/signIn'>Sign In</Link></li>
        }
         <div className='flex items-center mr-4 ml-3'>
    <p className='mr-2'>Search</p>
    <FaSearch></FaSearch>
    </div>
</>

    return (
        <div>
            <div className="navbar bg-slate-500 relative top-0">
  <div className="navbar-left">
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-primary">
      SRI LANKA <span className='text-blue-200'>TOURIST</span></a>
  </div>
  
  <div className="navbar-end p-3 text-white">
  </div>
  <div className="navbar-end hidden lg:flex">
           <ul className="menu menu-horizontal p-0 text-white">
            {menuItems}
          </ul>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
           <ul className="menu menu-horizontal p-0 text-white">
          </ul>
    </div>
        </div>
    );
};

export default Navbar;