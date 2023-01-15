import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/ContextProvider';
import UseAdmin from '../CustomHook/UseAdmin';

const Navbar = () => {
  

  const { user, logOut } = useContext(AuthContext)
  const [admin] = UseAdmin(user?.email)
  const userLogOut = () => {
      logOut()
          .then(result => {

          })
          .catch(() => {

          })
  }

    return (
        <div>
            <div className="navbar bg-slate-500 relative top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-primary">
      SRI LANKA <span className='text-blue-200'>TOURIST</span></a>
  </div>
  
  <div className="navbar-end p-3 text-white">
  <div className="navbar-center hidden lg:flex mr-20">
    <ul className="menu menu-horizontal px-1 text-white">
      
      <li><Link to={"/"}>Home</Link></li>
      <li><Link>Discover</Link></li>
      <li><Link>History</Link></li>
      {
        admin &&
        <li><Link to={'/adminAddData'}>Admin Panel</Link></li>
      }
     

      {
            user?.uid ?
                <>
                    <li><button className='btn btn-outline' onClick={userLogOut}>Sign Out</button></li>
                </>
                :
                <li><Link to='/signIn'>Sign In</Link></li>
        }
    </ul>
  </div>
    <div className='flex items-center'>
    <p className='mr-2'>Search</p>
    <FaSearch></FaSearch>
    </div>
  </div>
  </div>
        </div>
    );
};

export default Navbar;