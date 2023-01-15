import React from 'react';

const BannerCategory = ({item,setImages}) => {
  console.log(item)
    const {product_name,image,productDetails}=item;
    const description=productDetails.slice(0,50)
    console.log(description)
    return (
        <div onClick={()=>setImages(image)} className="card shadow-xl image-full h-full">
        <figure ><img src={image} alt="Shoes" /></figure>
        <div className="mt-40 mx-auto">
          <h2 className="card-title ">{product_name}</h2>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    );
};

export default BannerCategory;