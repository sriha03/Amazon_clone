import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Navigation,Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation,Autoplay]}
        autoplay={{delay:4500}}
        className='h-[50%]'        
        >
            <SwiperSlide>
                <img src="../images/carousel_1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
                <video src={"../images/carousel_vid.mp4"} type="video/mp4" controls muted='muted'></video>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_5.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
        <div className='h-[50%] bg-gradient-to-b from-stone-900'></div>
    </div>
  )
}

export default Carousel