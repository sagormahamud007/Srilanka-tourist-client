import React from 'react';
import { Link } from 'react-router-dom';

const BannerCategory = ({item,setImages}) => {
    const {product_name,image,productDetails,_id}=item;
    const description=productDetails.slice(0,30)
    return (
      <div>
        <div onClick={()=>setImages(image)} className="card shadow-xl image-full  rounded-none">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="mt-40 mx-auto">
          <h2 className="card-title ">{product_name}</h2>
          <p className="mb-0">{description}</p>
        </div>
      </div>
      <Link to={`/Details/${item._id}`} className="btn btn-active btn-ghost absolute top-0 left-0 py-5 w-full rounded-none">View Details</Link>
      </div>
    );
};

export default BannerCategory;