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
import BannerCategory from '../BannerCategory/BannerCategory';
import { Link } from 'react-router-dom';

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
            const res = await fetch('https://srilanka-tourist-server.vercel.app/cartData')
            const data = await res.json()
            return data
        }
    
    })
    
    refetch()
    const [images,setImages]=useState(null)

    return (
    
      <div className=" place-items-center bg-cover bg-center min-h-screen overflow-hidden" style={{ backgroundImage: `url(${images ? images : items[0]?.image})` }}>
       <div className="hero-overlay h-100 py-32 bg-opacity-70">
      <div className="hero-content flex-col lg:flex-row ">
      <div className='w-2/2'>
        <h1 className="mb-5 text-5xl font-bold text-white">WELCOME TO <br/></h1>
      <h2><span className='mt-5 text-5xl font-bold text-blue-200 mb-5'>SRI LANKA</span></h2>
          <p className="py-6 text-white">Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Eligendi non quis exercitationem culpa
       nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
        temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates 
        voluptas?</p>
          <button className="btn btn-outline px-24 text-white mt-5">Explore</button>
        </div>
        
<Swiper
  onSwiper={setSwiperRef}
  slidesPerView={2}
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
   key={item._id}
   item={item}
   setImages={setImages}
   >
    </BannerCategory> </SwiperSlide>)
      
    }
</Swiper>
</div>
      </div>
    </div>
     );
    };
   
export default Banner;