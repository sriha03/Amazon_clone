import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
   <header className='min-w-[1000px]'>
    <div className='flex bg-amazonclone text-white h-[60px] items-center'>        
    <div className='flex items-center mr-4'>          
        <img className='h-[35px] w-[100px]' src="../images/amazon.png" alt="" />  
        <div className='pl-2 pr-2 '>
            <div className='text-xs xl:text-sm'>Deliver to</div>
            <div className='text-xs xl:text-sm font-semibold'>India</div>
        </div>
    </div>
        <div className='flex'>
         
        </div>
        <div className='flex items-center mr-4'>        
        <div className='pl-4 pr-4 '>
            <div className='text-xs xl:text-sm'>Hello, Signin</div>
            <div className='text-xs xl:text-sm font-semibold'>Accounts & Lists</div>
        </div>
        <div className='pl-4 pr-4 '>
            <div className='text-xs xl:text-sm'>Returns</div>
            <div className='text-xs xl:text-sm font-semibold'>& Orders</div>
        </div>
        <div >
            <ShoppingCartIcon className='h-6 w-6'/>
            <div className='text-xs xl:text-sm'>
                Cart
            </div>
        </div>
       

        </div>
    </div>
   </header>
  )
}

export default NavBar