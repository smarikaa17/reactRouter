import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../../assets/404-error.json"
import { useNavigate } from 'react-router-dom';

const ErrorHandle = () => {
   const navigate= useNavigate()
   const handleClick= () =>{
      navigate('/')
   }
  return (
   <div className='flex justify-center items-center p-4 m-4 flex-col  gap-2 bg-[#FAF7F3] h-80'>
    <Lottie
      animationData={animationData}
      loop={true}
      className='w-48'
    />
   <p className='text-xl'> Looks like you took a wrong turn! </p>
    <p className='text-xl'>Don't worry, we all get lost sometimes.</p>
    <button onClick={handleClick} className=' bg-[#c2410c] p-2 rounded-md text-white hover:bg-[#a33003]'>
        Go Home! 
    </button>
   </div>
   
  )
}

export default ErrorHandle