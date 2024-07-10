import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function LeftBar() {
  return (
    <div className='flex flex-col items-cemter border bg-blue-600 bg-opacity-85 text-white'>


        <div className='flex justify-center items-center h-20'>
            <strong>GİRİŞ YAP</strong>
        </div>


        <div className='flex justify-center itmes-center h-full'>
            <img src={"../img/male-programmer-svgrepo-com.svg"} className='w-60' alt="" />
        </div>


        <div className='flex flex-col justify-center gap-3 items-center h-[150px]'>
            <div>
                <i>social media</i>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <a href="https://www.instagram.com/mucahitxtekbs/" className='text-white text-4xl transition-all hover:scale-125 hover:shadow-xl'><FaInstagram /></a>
                <a href="https://github.com/tekbasmucahit6" className='text-white text-4xl transition-all hover:scale-125 hover:shadow-xl'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mucahit-tekbas/" className='text-white text-4xl hover:scale-125 transition-all hover:shadow-xl'><FaLinkedin /></a>
            </div>
        </div>


    </div>
  )
}

export default LeftBar