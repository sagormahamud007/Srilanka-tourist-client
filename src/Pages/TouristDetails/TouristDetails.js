import React from 'react';
import { useLoaderData } from 'react-router-dom';


const TouristDetails = () => {
const touristDetails=useLoaderData()
console.log(touristDetails)
const {image,mobile,productDetails,product_name,userEmail}=touristDetails;
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">{product_name}</h1>
            <p className="py-6">{productDetails}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default TouristDetails;