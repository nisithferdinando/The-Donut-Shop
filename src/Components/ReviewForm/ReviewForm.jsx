import React from 'react'
import { motion } from 'framer-motion'

const ReviewForm = () => {
  return (
    <div>
        <div className='py-16'>
            <div className='container'>
             <motion.h1 
             initial={{opacity:0, x:100}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:0.5, delay:0.3}}
             className='text-center font-sans text-3xl text-gray-700'>Share Your Sweet Experience 🍩💬</motion.h1>
             <div className='flex justify-center'>
             <div className='flex flex-col justify-start items-start gap-5 mt-16'>
              <motion.input 
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:0.1}}
              type='text' placeholder='Name' className='text-2xl font-sans border-2 px-5 py-2 border-orange-300 border-dashed rounded-sm md:w-[700px] w-[300px]'/>
              <motion.input
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:0.2}}
              type='text' placeholder='Topic' className='text-2xl font-sans border-2 px-5 py-2 border-orange-300 border-dashed rounded-sm md:w-[700px] w-[300px]'/>
              <motion.textarea
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:0.3}}
              placeholder='Write a review' className='text-2xl font-sans border-2 px-5 py-2 border-orange-300 border-dashed rounded-sm md:w-[700px] md:h-[200px] w-[300px] h-[100px]'/>
              <motion.button 
              initial={{opacity:0, y:100}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:0.4}}
              className='md:text-2xl font-sans bg-orange-300 text-white md:px-5 md:py-2 rounded-xl hover:bg-orange-500 duration-300 text-lg px-4 py-2'>Submit</motion.button>
             </div>
             </div>
             

            </div>

        </div>
    </div>
  )
}

export default ReviewForm