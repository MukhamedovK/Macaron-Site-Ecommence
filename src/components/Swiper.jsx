import React from "react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Swiper = () => {
  return (
<div className="w-full flex justify-center">
    <ReactSwiper
        className="w-full"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
      <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-12">
            <div className="slide-logo relative">
              <img
                className="w-[32px] h-[31px]"
                src="public/home-img/SwiperHeader-img/Group 213.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">
              МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-5">
            <div className="slide-logo relative">
              <img
                className="w-[41px] h-[40px]"
                src="public/home-img/SwiperHeader-img/Group 214.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">ВСЕГДА СВЕЖЕЕ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-7">
            <div className="slide-logo relative">
              <img
                className="w-[45px] h-[35px]"
                src="public/home-img/SwiperHeader-img/Group 216.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">
              ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-7">
            <div className="slide-logo relative">
              <img
                className="w-[45px] h-[31px]"
                src="public/home-img/SwiperHeader-img/Group 108.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">ДОСТАВКА В ДЕНЬ ЗАКАЗА</p>
          </div>
        </SwiperSlide>
        </ReactSwiper>
    </div>
  )
}

export default Swiper
