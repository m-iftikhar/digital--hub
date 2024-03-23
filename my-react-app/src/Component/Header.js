import React from 'react'
import { AiOutlineMenu ,  } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [toggle, setToggle] =React.useState(false)
    function toggleChange(){
        setToggle(!toggle)
    }
  return (
    <div className='bg-[#153047] py-6'>
        <div className=' max-w-[1240px]  mx-auto flex justify-between items-center py-[14px]'>
        <div className='text-white font-bold text-3xl hover:text-pink-700'>
        Digital Hub
        </div>
        {
            toggle ? 
              <IoClose  onClick={toggleChange} className='text-white font-bold text-2xl md:hidden block' />:<AiOutlineMenu onClick={toggleChange} className='text-white font-bold text-2xl md:hidden block' />
        }
        {/* <AiOutlineMenu className='text-white font-bold size-2xl md:hidden block' />
        <IoClose  className='text-white font-bold size-2xl md:hidden block' /> */}
        <ul className='text-white font-bold  gap-10 md:flex  hidden '>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className= {`text-white  duration-300 font-bold md:hidden bg-black  fixed h-screen top-[112px] w-full
            ${toggle ? "left-0" : "left-[-100%]"}
            `}>
            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
        </ul>
        </div>

    </div>
  )
}

export default Header