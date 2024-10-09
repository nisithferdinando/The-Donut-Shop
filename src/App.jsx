import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ResponsiveNavbar from './Components/Navbar/ResponsiveNavbar';
import Navbanner from './Components/Navbar/Navbanner';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import NumberCounter from './Components/NumberCounter/NumberCounter';
import Cover from './Components/Cover/Cover';
import Reviews from './Components/Reviews/Reviews';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
  <main className='overflow-x-hidden'>
    <Navbar/>
    <Navbanner/>
    <Hero/>
    <Category/>
    <NumberCounter/>
    <Cover/>
    <Reviews/>
    <ReviewForm/>
    <Footer/>
  </main>
  );
}

export default App;