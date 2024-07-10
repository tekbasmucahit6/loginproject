import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function RightBar() {
  return (
    <div className='flex flex-col justify-center items-center rounded-tr-xl rounded-br-xl xl:border xl:border-black lg:border lg:border-black md:border md:border-black gap-10 bg-slate-100 bg-opacity-50'>
        
        <div className='flex flex-col justify-center items-start gap-5'>
            <label htmlFor="">kullanıcı adı</label>
            <input type="text" className='border border-black rounded-full p-1 px-2' />
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
            <label htmlFor="">şifre</label>
            <input type="password" className='border border-black rounded-full p-1 px-2' />
        </div>

        <div className='flex flex-row justify-center items-start gap-10'>

            <div className='flex justify-center items-center gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-sm'>beni hatırla</label>
            </div>

            <div className='flex justify-center items-center'>
                <a href="" className='text-blue-500 text-sm decoration-'>şifremi unuttum</a>
            </div>

        </div>

        <div className='flex flex-col justify-center items-center gap-10'>
           <button className='bg-blue-600 text-white w-[250px] p-2 rounded-full hover:bg-blue-700 transition-all'>giriş yap</button>
            <a href="" className='text-sm text-blue-600'>kayıt ol</a>
        </div>


        <div className='grid grid-cols-3 gap-5'>
            <div className='grid justify-center items-center'>
                <hr className='text-black bg-black w-[100px]' />
            </div>
            <div className='flex justify-center items-center'>
                <i>other login</i>
            </div>
            <div className='grid justify-center items-center'>
                <hr className='text-black bg-black w-[100px]' />
            </div>
        </div>

        <div className='flex justify-center items-center text-3xl gap-10'>
            <div className='flex justify-center items-center'>
                <FaGoogle className='text-blue-600 cursor-pointer hover:scale-125 transition-all' />
            </div>
            <div className='flex justify-center items-center'>
                <FaApple className='cursor-pointer hover:scale-125 transition-all' />
            </div>
            <div className='flex justify-center items-center'>
                <FaFacebook className='text-blue-500 cursor-pointer hover:scale-125 transition-all' />
            </div>
        </div>


    </div>
  )
}

export default RightBar