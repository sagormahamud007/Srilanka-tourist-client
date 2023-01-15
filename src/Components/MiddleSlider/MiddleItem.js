import React from 'react';

const MiddleItem = ({items}) => {
    const{image}=items;
    return (
        <div className="card shadow-xl h-full">
        <figure className="h-full">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
      </div>
    );
};

export default MiddleItem;