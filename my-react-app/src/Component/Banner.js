import React from 'react'
import  { ReactTyped } from "react-typed";
// import { Typed } from 'react-typed'; // Importing Typed from react-typed package

const Banner = () => {
  return (
    <div className='w-full py-20 bg-emerald-400 h-screen'>
      <div className="mx-auto max-w-[1240px] text-center">
        <h1 className='text-3xl font-bold text-white mb-4'>Learn with us</h1>
        <h1 className='md:text-5xl text-2xl font-bold text-white mb-4'>Grow with us</h1>
        <div className='md:text-3xl text-2xl font-bold text-black py-2 mb-4'>
          Learn  <ReactTyped  className='md:text-3xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2'
            strings={['Digital Makerting', 'Web Development', 'Ethical Hacking']}
            typeSpeed={120}
            backSpeed={140}
            loop
         />
        </div>
      
    

   
        <button className="bg-black hover:bg-[#153047] text-white rounded-md  w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
