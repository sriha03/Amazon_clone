import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import CarouselCategory from './CarouselCategory'
import CarouselProducts from './CarouselProducts'

const HomePage = () => {
  return (
    <div className='bg-amazonclone-background'>
        <div className='min-w-[1000px] max-w-[1500px] m-auto '>             
            <Carousel />        
            <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
                <HomePageCard title={"we have a surprise for you"} image={"../images/home_grid_1.jpg"} link={"see terms"} />
                <HomePageCard  title={"watch rings of power"} image={"../images/home_grid_2.jpg"} link={"see now"}  />
                <HomePageCard  title={"unlimited streaming"} image={"../images/home_grid_3.jpg"} link={"see now"}  /> 
                <HomePageCard  title={"more titles for you"} image={"../images/home_grid_4.jpg"} link={"see now"}  />
                <HomePageCard  title={"shop pet stuff"} image={"../images/home_grid_5.jpg"} link={"see now"}  />
                <HomePageCard  title={"spring sale"} image={"../images/home_grid_6.jpg"} link={"see now"}  />
                <HomePageCard  title={"echo buds"} image={"../images/home_grid_7.jpg"} link={"see now"}  />
                <HomePageCard  title={"family plan: 3 months free"} image={"../images/home_grid_8.jpg"} link={"see now"}  />
                <div className='m-3 pt-8' >
                <img className ='xl:hidden 'src={"../images/banner_image_2.jpg"} alt="" />
                </div>
            </div>
            <CarouselProducts/>
            <CarouselCategory />
            <div className='h-[250px]'>
                <img className='h-[100%] m-auto' src={"../images/banner_image.jpg"} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default HomePage