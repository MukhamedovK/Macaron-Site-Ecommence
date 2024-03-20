import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperMain() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 5    ,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="public/legals-img/Rectangle 371.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 372.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 373.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 374.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 375.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 376.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 371.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 372.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 373.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/legals-img/Rectangle 374.png" className='w-[133px] h-[93px]' alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}