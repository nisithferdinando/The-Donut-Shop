import React, { useState } from 'react'
import { NavbarMenu } from '../../Data/Navdata'
import {MdMenu} from 'react-icons/md'
import { LuDonut } from "react-icons/lu";
import ResponsiveNavbar from './ResponsiveNavbar';
import {motion} from 'framer-motion'
const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false);
  return (
    <div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      >
    <div className='w-full flex justify-between items-center py-6 bg-orange-200'>

     <div className='text-2xl flex items-center gap-2 font-bold text-gray-700 ml-5'>
     <LuDonut className='text-3xl text-secondary'/>
      <p className='font-medium'>The Donut Shop</p>
     </div>
    
    <div className='hidden lg:block'>
    <ul className='flex items-center gap-6'>
        {
            NavbarMenu.map((item)=>{
                return(
                 <li key={item.key}>
                    <a href={item.link} className='inline-block text-gray-700 text-sm xl:text-lg py-1 px-2 xl:px-3
                     hover:text-secondary transition-all duration-300 font-openSans'>{item.title}</a>
                 </li>
                );
            })
        }
    </ul>
    </div> 

    <div className='hidden lg:block space-x-6 mr-5'>
   <button className='font-normal text-black border border-blue-900 px-4 py-2 hover:bg-yellow-200
    rounded-md'> Login </button>
   <button className='font-serif text-blue-700 hover:text-blue-500'>Sign up</button>
   <button className='font-normal text-secondary hover:text-blue-400'>Order Now</button>
    </div>
    <div className='lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
     <MdMenu className='text-4xl mr-4'/>
    </div>
    </div>
    </motion.div>
    <ResponsiveNavbar isOpen={isOpen}/>
    </div>
  )
}

export default Navbar