import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"

const CarouselProducts = () => {
  return (
    <div className='bg-white m-3 p-2 '> 
    <div className='text-xl font-semibold text-amber-950 ml-3 mb-3'>Best Sellers</div>       
        <Swiper      
         slidesPerView={7}  
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}       
        >
        {
                Array.from({length:9},(_,i)=>
                    <SwiperSlide key={i}>
                        <img src={`../images/product_${i}_small.jpg`} alt="" />
                    </SwiperSlide>
                )
        }      

        </Swiper>
    </div>
  )
}

export default CarouselProducts