import React from 'react';
import { useLoaderData } from 'react-router-dom';


const TouristDetails = () => {
const Details=useLoaderData()

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Details?.image} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">{Details?.product_name}</h1>
            <p className="py-6">{Details.productDetails}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default TouristDetails;