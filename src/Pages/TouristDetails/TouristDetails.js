import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleItem from './SingleItem';

const TouristDetails = () => {
const touristDetails=useLoaderData()

    return (
        <div>
            {
                touristDetails.map(touristInfo=><SingleItem
                key={touristInfo._id}
                touristInfo={touristInfo}
                ></SingleItem>)
            }
        </div>
    );
};

export default TouristDetails;