import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../HomeBanner/Style/Styels.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Navbar from '../../Shere/Navbar';
import BannerCategory from '../BannerCategory/BannerCategory';

const Banner = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    };

  
    const append = () => {
      swiperRef.appendSlide(
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    };


    const {data:items=[],refetch}=useQuery({
        queryKey:["bannerData"],
        queryFn:async ()=>{
            const res = await fetch('http://localhost:5000/cartData')
            const data = await res.json()
            return data
        }
    
    })

    refetch()
    const [images,setImages]=useState(null)

  

    return (
    
         
      <div className='flex items-center flex-col lg:flex-row overflow-hidden'>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${images ? images : items[0]?.image})` }}>
 
<div className='w-1/2 ml-auto'>
<Swiper
  onSwiper={setSwiperRef}
  slidesPerView={3}
  centeredSlides={true}
  spaceBetween={30}
  pagination={{
    clickable: true,
    
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  }}
 

  modules={[Pagination, Navigation,]}
  className="mySwiper"
>
  
    {
      
      items.map(item=>
   <SwiperSlide> <BannerCategory
   key={item.id}
   item={item}
   setImages={setImages}
   ></BannerCategory> </SwiperSlide>)
      
    }
     
</Swiper>
</div>
<div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content grid lg:grid-cols-2 md:grid-cols-1  text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">WELCOME TO <br/></h1>
      <h2><span className='mt-5 text-5xl font-bold text-blue-200 mb-5'>SRI LANKA</span></h2>
      <p className="mt-5">Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Eligendi non quis exercitationem culpa
       nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
        temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates 
        voluptas? </p>
      <button className="btn btn-outline text-white mt-5 px-20">Explore</button>
    </div>
    </div>
    </div>
</div>

  

  

/* //     <div className="max-w-md">
//     <div className="carousel w-full mt-40 ml-20"> */
//  {
//     slider &&
//     slider.map((sliderImg)=>
//     <>
//    <div id={`slide${sliderImg.id}`}   className="carousel-item relative w-full mb-0">
//     <img  src={sliderImg.image} className="w-full" alt=''/>
//     <div onClick={()=>setImages(sliderImg?.image)} className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
//       <a onClick={()=>setImages(sliderImg?.image)} href={`#slide${sliderImg.prev}`} className="btn btn-circle">❮</a> 
//       <a onClick={()=>setImages(sliderImg?.image)} href={`#slide${sliderImg.next}`} className="btn btn-circle">❯</a>
//     </div>
//     </div> 
//     </>
//     )
//  }
//   </div>
// </div>
//     </div>
//   </div>
// </div>
    );
};
export default Banner;