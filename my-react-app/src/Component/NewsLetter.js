import React from 'react'

const NewsLetter = () => {
  return (
    <div className='p-4  bg-emerald-400  '>
        <div className='max-w-[1240px] md:flex mx-auto justify-between py-[50px]'>
        <div className='  '>
           <h1 className='font-bold md:text-[40px] text-white'> Want to Leran latest IT Skills</h1>
        <span className='font-bold text-2xl text-black'>
            Sign up to Newletter and stay upto date!</span>

        </div>
        <div  >
            <input className='p-3 mr-2 text-slate-900 rounded' placeholder='Email'></input>
            <button className="bg-black hover:bg-[#153047] text-white font-bold py-3 mb-4 px-6 rounded">
            Sign Up
        </button>
        <br></br>
        <p className='font-bold text-white md:text-[18px]'>  We care obout the privacy of data.<br></br> 
         <a href='' className='text-blue-900'>Read our Privacy </a></p>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter
