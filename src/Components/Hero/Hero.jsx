import React from 'react'
import {FaPlay} from 'react-icons/fa'
import donut from '../../assets/01.png'
import { motion } from 'framer-motion';
const SlideRight=(delay)=>{
  return{
    hidden:{
      opacity:0,
      x:100,
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        delay:delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        <div className='flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0'>
          <div className='text-center md:text-left space-y-6'>
            <motion.h1 
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className='text-5xl uppercase font-semibold lg:text-5xl leading-tight'>Fresh, Warm & <span className='text-orange-300'> Irresistible Donuts</span></motion.h1>

           <motion.p
           variants={SlideRight(0.6)}
           initial="hidden"
           animate="visible"
           className='text-xl from-neutral-600'>Explore Our Unique Flavors and Classic Favorites</motion.p>

           <motion.div
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
           className='flex gap-8 justify-center md:justify-start !mt-8 items-center'>
            <button className='bg-orange-300 font-semibold px-5 py-3 rounded-full hover:shadow-xl duration-300 hover:text-white hover:bg-black'>See Now</button>
            <button className='flex justify-end items-center gap-2 font-semibold px-2 py-2 bg-blue-200 rounded-2xl'>
              <span className='w-10 h-10 bg-secondary/10 rounded-full flex justify-center items-center'>
              <FaPlay/>
              </span>
              Watch our story
            </button>

           </motion.div>
          </div>
        </div>
        <motion.div
        initial={{opacity:0, x:200}}
        animate={{opacity:1, x:0}}
        transition={{type:"spring", stiffness:100, delay:0.2}}
        className='flex justify-center items-center mt-24'>
          <img src={donut} alt='Dount Image' className='md:w-[500px] xl:w-[600px]'/>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero