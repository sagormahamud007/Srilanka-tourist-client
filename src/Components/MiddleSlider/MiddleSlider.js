import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../HomeBanner/styles.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import MiddleItem from './MiddleItem';
import { useQuery } from '@tanstack/react-query';

const MiddleSlider = () => {

const { data: dataItem=[],refetch } = useQuery({
  queryKey: ['bookingData'],
  queryFn: async () => {
      const res = await fetch('https://srilanka-tourist-server.vercel.app/middleData')
      const data = await res.json()
      return data;
  }
});
refetch()
    return (
        <div className='flex items-center flex-col lg:flex-row overflow-hidden bg-slate-200'>
<Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        grabCursor={true}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
  dataItem.map(items=><SwiperSlide><MiddleItem 
  key={items.id}
  items={items}
  ></MiddleItem></SwiperSlide>)
}
      </Swiper>
 <div className='ml-6'>
     <h1 className='text-6xl font-bold mb-5'> EXPLORE <br></br><span className='mb-10'> THE ISLAND</span></h1> <p className='mb-5'>Each place and each smile in Sri Lanka has a      story to tell. We have so much to share with you.3      so come along to our island in paradise</p>      
     <button className="btn btn-active btn-primary border-none px-20">Explore</button>
</div>
      </div>

    );
};

export default MiddleSlider;