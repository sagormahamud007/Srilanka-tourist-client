import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='found-page'>
            <h1 className='found-Code'><span className='text-red-600'>4</span> <span className='text-accent'>0</span> <span className='text-red-600'>4</span></h1>
            <h2 className='title'>Opps! Page Not Found</h2>
            <p>Sorry the page you're looking for doesn't exist. <br /> if you think somethings is broken,report a problem</p>
            <Link to='/'><button className='home-btn'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;