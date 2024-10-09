import React from 'react'
import Slider from 'react-slick/lib/slider'
import { motion } from 'framer-motion'
import r1 from '../../assets/r1.jpg'
import r5 from '../../assets/r5.jpg'
import r3 from '../../assets/r3.jpg'
import r4 from '../../assets/r4.jpg'
import r2 from '../../assets/r2.jpg'

const ReviewData=[
     
    {
        id:1,
        name:"David L",
        topic:"Delicious and fresh!",
        location:"England",
        text:"The donuts are absolutely delicious, and you can tell they use fresh ingredients. However, it can get a little crowded during peak hours, so I recommend going early in the morning or in the afternoon. And great spot for donut lovers!",
        img:r2,
    },
    {
        id:2,
        name:"Emily S",
        topic:"Tasty donuts",
        location:"Germany",
        text:"The donuts are absolutely delicious, and you can tell they use fresh ingredients. However, it can get a little crowded during peak hours, so I recommend going early in the morning or in the afternoon. And great spot for donut lovers!",
        img:r5,
    },
    {
        id:3,
        name:" Mike",
        topic:"Delicious and fresh!",
        location:"Australia",
        text:"This place knows how to make donuts. The glazed donuts literally melt in your mouth, and the specialty donuts are packed with flavor. I've tried almost all of them, and they never disappoint. Can’t wait to come back!",
        img:r3,
    },
    {
        id:4,
        name:"Sarah",
        topic:"Best donuts in town!",
        location:"Italy",
        text:"I can't get enough of the variety they offer. From classic glazed to fun, unique flavors like maple bacon, there's something for everyone. The staff is always friendly, and the donuts are always fresh. Highly recommend this place",
        img:r4,
    },

];

const Reviews = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
        <div className='py-14 mb-10'>
            <div className='container'>
                <div className='space-y-4 p-10 text-center max-w-[600px] mx-auto mb-4'>
                    <motion.h1
                    initial={{opacity:0, x:-100}}
                    animate={{opacity:1, x:0}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:0.6, delay:0.2}}
                    className='text-gray-500 uppercase font-sans text-2xl'>Hear from Our Happy Customers</motion.h1>
                </div>
                <div>
                    <Slider {...setting}>
                    {
                        ReviewData.map((item)=>{
                            return(
                                <motion.div
                                initial={{opacity:0, x:-100}}
                                whileInView={{opacity:1, x:0}}
                                transition={{duration:0.5, delay:0.3}}
                                key={item.id}>
                                <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white/30 mb-4'>
                                <div className='flex justify-start items-center gap-5'>
                                    <img src={item.img}
                                    className='w-20 h-20 rounded-full'/>
                                <div>
                                    <p className='text-xl font-semibold text-black'>{item.name}</p>
                                    <p className='text-base font-sans text-gray-700'>{item.location}</p>
                                </div>
                                </div>
                                <h1 className='text-black font-semibold text-xl text-center'>"{item.topic}"</h1>
                                <div className='py-6 space-y-4'>
                                    <p className='font-sans text-sm text-justify'>{item.text}</p>
                                   
                                </div>

                                </div>
                                </motion.div>
                            );
                        })
                    }
                    </Slider>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Reviews