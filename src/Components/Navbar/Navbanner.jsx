import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { RxCross2 } from "react-icons/rx";

const NavBanner = () => {

    const [isOpen, setIsOpen]=useState(true);
  return (
    <div>
      { 
      isOpen && (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='bg-purple-200 text-lg text-center font-sans p-1 hidden lg:block relative text-gray-700'>
        Hello, donut lover! Are you ready to discover your new favorite treat? 
        <a href='#' className='text-base text-blue-800 font-semibold hover:text-blue-500 px-4'>Order Now</a>
        <div className='text-lg absolute top-1/2 right-10 cursor-pointer -translate-y-1/2' onClick={()=>setIsOpen(false)}>
        <RxCross2/>
        </div>
        </motion.div>
      )
    }
    </div>
  )
}

export default NavBanner