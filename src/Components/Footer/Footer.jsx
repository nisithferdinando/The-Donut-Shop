import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { LuDonut } from 'react-icons/lu'

const Footer = () => {
  return (
    <div>
        <div className='py-4 bg-orange-200'>
            <div className='container'>
                <div className='grid md:grid-cols-4 grid-cols-2 md:ml-14'>
                    <div className='px-4 py-8'>
                        <h1 className='text-xl font-semibold md:text-justify text-left mb-5'>Quick Links</h1>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <a href='#' className='text-lg hover:underline'>Category</a>
                            </li>
                            <li>
                                <a href='#' className='text-lg hover:underline'>Gallery</a>
                            </li>
                            <li>
                                <a href='#' className='text-lg hover:underline'>Order</a>
                            </li>
                            <li>
                                <a href='#' className='text-lg hover:underline'>FAQs</a>
                            </li>

                        </ul>

                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold md:text-justify text-left mb-5'>Social Media Links</h1>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex justify-start gap-3 items-center'>
                                <FaFacebook className='cursor-pointer text-2xl'/> <a href='#' className='text-lg hover:underline'>FaceBook</a>
                            </li>
                            <li className='flex justify-start gap-3 items-center'>
                               <FaInstagram className='text-2xl cursor-pointer'/> <a href='#' className='text-lg hover:underline'>instagram</a>
                            </li>
                            <li className='flex justify-start gap-3 items-center'>
                              <FaTwitter className='text-2xl cursor-pointer'/>  <a href='#' className='text-lg hover:underline'>Twitter</a>
                            </li>
                            <li className='flex justify-start gap-3 items-center'>
                              <FaLinkedin className='text-2xl cursor-pointer'/>  <a href='#' className='text-lg hover:underline'>Linkedin</a>

                            </li>

                        </ul>

                    </div>
                    <div className='px-4 py-8 '>
                        <h1 className='text-xl font-semibold md:text-justify text-left mb-5'>Business Hours</h1>
                        <ul className='flex flex-col gap-3 list-disc'>
                        <li>
                        <a href='#' className='text-lg'>Monday - Friday: 7:00 AM - 7:00 PM</a>
                        </li>
                        <li>
                            <a href='#' className='text-lg'>Saturday: 8.00 AM - 8.00 PM</a>
                        </li>
                        <li>
                            <a href='#' className='text-lg'>Sunday: 9.00 Am - 5.00 PM</a>
                        </li>
                        </ul>

                    </div>
                    
                    <div className='py-8 px-4 mx-[50px]'>
                        <div className='flex justify-start gap-3'>
                     <LuDonut className='text-3xl'/> 
                     <h1 className='text-2xl font-openSans text-black/85'>The Donut Shop</h1>
                     </div>
                     <p className='text-base text-black mt-4 '>123 Donut Lane, Sweet City, SC 12345</p>
                     <p className='text-base text-black mt-4'>(123) 456-7890</p>
                     <p className='text-base text-blue-700 mt-4'>info@yourdonutshop.com</p>

                    </div>

                </div>
                <div className='text-center mt-16'>
                
                    <h1 className='text-lg font-sans text-black/50'>© 2024 The Donut Shop. All rights reserved.</h1>
                </div>
                

                </div>
            </div>

        </div>
   
  )
}

export default Footer