import React from 'react'
import d1 from "../../assets/d1.png"
import d2 from "../../assets/d2.jpg"
import d3 from "../../assets/d3.jpg"
import d4 from "../../assets/d4.jpg"
import d5 from "../../assets/d5.jpg"
import Slider from 'react-slick';
import {motion} from 'framer-motion'

const Donut=[
    {
        id:1,
        name:"Glazed Donut",
        text:"The classic, with a sweet and shiny glaze.",
        img:d1,
        price:"$10",
        rate:"⭐⭐⭐⭐"
    },
    {
        id:2,
        name:"Chocolate Frosted",
        text:"Topped with rich black chocolate icing",
        img:d2,
        price:"$12",
        rate:"⭐⭐⭐⭐⭐",
    },
    {
        id:3,
        name:"Jelly Filled",
        text:"Filled with jam or jelly with powdered sugar",
        img:d3,
        price:"$15",
        rate:"⭐⭐⭐⭐",
    },
    {
        id:4,
        name:"Powdered Sugar",
        text:"Covered in a top layer of powdered sugar",
        img:d4,
        price:"$16",
        rate:"⭐⭐⭐⭐⭐",
    },
    {
        id:5,
        name:"Cream Filled",
        text:"Filled donut with custard and chocolate on top",
        img:d5,
        price:"$12",
        rate:"⭐⭐⭐⭐⭐",
    },

];

const Category = () => {

  const settings={
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
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
  <div className='mb-28'>
   <div className='container'>
    <motion.div 
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.4, delay:0.3}}
    className='space-y-6 p-10 text-center max-w-[600px] mx-auto mb-6'>
        <h1 className='text-center uppercase font-semibold text-3xl text-gray-500'>Check Out Popular Donuts</h1>

    </motion.div>
   <div>
    <Slider {...settings}>
    {
        Donut.map((item)=>{
            return(
                    <motion.div 
                     initial={{opacity:0, x:-100}}
                     animate={{opacity:1, x:0}}
                     transition={{duration:0.8, delay:0.4}}
                     whileInView={{opacity:1, x:0}}
                    key={item.id}>
                        <div className='flex gap-4 py-8 shadow-lg mx-4 rounded-xl bg-orange-100 justify-center mb-10'>
                        <div className='flex flex-col justify-center items-center gap-5'>
                        <img src={item.img} alt="" className='w-40 h-40 rounded-3xl'/>
                        <div className='text-center'>
                        
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                        <p className='text-lg mt-2 text-center'>{item.rate}</p>
                        
                        <p className='text-lg font-serif text-gray-700 mt-4 text-center'>{item.text}</p>
                        <div className='flex flex-row gap-5 justify-center pt-5'>
                        <h3 className='text-2xl font-semibold text-blue-500'>{item.price}</h3>
                        <button className='text-base font-serif text-white bg-black border rounded-lg px-2 py-1 hover:text-white hover:bg-black/80'>Order Now</button>
                        </div>
                         </div>
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

export default Category