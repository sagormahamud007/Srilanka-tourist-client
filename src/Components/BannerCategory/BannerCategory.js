import React from 'react';
import { Link } from 'react-router-dom';

const BannerCategory = ({item,setImages}) => {
  console.log(item)
    const {product_name,image,productDetails,_id}=item;
    const description=productDetails.slice(0,50)
    console.log(description)
    return (
        <div onClick={()=>setImages(image)} className="card shadow-xl image-full h-full ">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="mt-40 mx-auto">
          <h2 className="card-title ">{product_name}</h2>
          <p className="mb-0">{description}</p>
          <Link onClick={`/touristDetails/${_id}`}><button className="btn btn-sm">View Details</button></Link>
        </div>
      </div>
    );
};

export default BannerCategory;