import React from 'react'
import { CoverData } from '../../Data/CoverData'
import { motion } from 'framer-motion'

const SlideUp=(delay)=>{
 
  return {
    hidden:{
      opacity:0,
      y:50
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:1,
        delay:delay,
      },
    },
  };

};

const Cover = ({reverse}) => {
  return (
    <div>
    <div className='bg-[#f5f5f5] pb-14'>
     <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-1 space-y-6 md:space-y-0'>
            {
                CoverData.map((item)=>{
                 return(    
                <div key={item.id} className='grid md:grid-cols-2 grid-cols-2 py-16'>
                    
                <div className='flex flex-col justify-center md:text-left space-y-4 lg:max-w[500px] pl-5'>
                <motion.h1
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView={"visible"}
                className='text-lg lg:text-3xl font-semibold capitalize'>{item.title}</motion.h1>
                <motion.p 
                variants={SlideUp(0.4)}
                initial="hidden"
                whileInView={"visible"}
                className='text-base text-gray-600 text-justify'>{item.text}</motion.p>
                <div className='flex justify-center md:justify-start'>
          
                <motion.button
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
                className='bg-orange-200 font-semibold px-3 py-2 rounded-lg hover:text-gray-100 hover:bg-orange-400 mt-4 duration-300'>
                    {item.button}
                </motion.button>
                </div>
                </div>
                
             <div className={`flex justify-center items-center ${reverse && "md:order-last md:justify-end"}`}>
               <motion.img
                initial={{opacity:0, scale:0.5}}
                whileInView={{opacity:1, scale:1}}
                transition={{type:"spring", stiffness:80, delay:0.2}}
               src={item.img} className='md:w-[350px] md:h-full object-cover ml-20 rounded-xl w-[250px] h-[250px]'
               />
           </div>
           </div>
              );
            })
            }

        </div>
     </div>
    </div>
    </div>
  )
}

export default Cover