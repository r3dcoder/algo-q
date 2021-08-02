
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import data from '../data/data.json'
import Image from "next/image";
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);
const breakpoints = {
    // when window width is >= 640px
    200: {
       
        slidesPerView: 1,
    },
    // when window width is >= 768px
    420: {
         
        slidesPerView: 2.1,
    },
    950: {
         
        slidesPerView: 1.1,
    },
};

const Slider = () => {
    return (
        <div className='py-10 w-full   px-2'>
            <Swiper  slidesPerView= {1.01} spaceBetween={10}  loop={true} navigation={true} className=" hidden lg:block">
            {data.sliders.map((slider, index) => (
                
                <SwiperSlide  key={index}>
                    <div className="w-full h-96 bg-white relative">
                    <Image
                            alt={slider.imageLink}
                            layout="fill"
                           
                            src={slider.imageLink}
                        />
                    </div>
                </SwiperSlide>
       
            ))}
        </Swiper>
        <Swiper breakpoints={breakpoints} spaceBetween={30}  loop={true} navigation={true} className="mySwiper block lg:hidden ">
            {data.sliders.map((slider, index) => (
                
                <SwiperSlide  key={index}>
                    <div className="w-full px-4 h-128 bg-white relative">
                    <Image
                            alt={slider.imageLink}
                            layout="fill"
                            className="px-4"
                            src={slider.mobileImageLink}
                        />
                    </div>
                </SwiperSlide>
       
            ))}
        </Swiper>
        </div>
    )
}

export default Slider
