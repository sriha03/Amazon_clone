import React from 'react'

const HomePageCard = ({title,image,link}) => {
  return (
    <div className='bg-white h-[420px] z-30 m-3'>
        <div className='text-xl xl:text-2xl font-semibold ml-4 mt-4'>
            {title}
        </div>
        <div className='m-auto mt-4 ml-4 mr-2  h-[300px]'>
           <img className='h-full object-cover' src={image} alt="" />
        </div>
        <div className='text-xs xl:text-sm font-light text-blue-600 ml-4 mt-4 mr-2'>
            {link}
        </div>
    </div>
  )
}

export default HomePageCard