import React from 'react'
import { NavbarMenu } from '../../Data/Navdata'
import {motion, AnimatePresence} from 'framer-motion'

const ResponsiveNavbar = ({isOpen}) => {
  return (
    <div>
      <AnimatePresence mode='wait'>
       {
        isOpen && (<motion.div 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-100}}
        transition={{duration:0.3}}
        >

        <div className='text-xl font-semibold uppercase bg-orange-200 text-gray-800 py-10 m-6 rounded-3xl'>
          <ul className='flex flex-col justify-center items-center gap-10'>
           {
            NavbarMenu.map((item)=>{
              return(
                 <li key={item.id}>
                 <a href={item.link}>{item.title}</a> 
                 </li>
              );
            })
           }
          </ul>

        </div>
        </motion.div>)
       }
      </AnimatePresence>
    </div>
  )
}

export default ResponsiveNavbar