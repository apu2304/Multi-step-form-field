import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Sidebar() {
  const location = useLocation()
  const getStepClass = (step) => { 
    const isActive = location.pathname === step 
    console.log(`Checking step: ${step}, isActive: ${isActive}`) 
    return isActive ? 'nav active' : 'nav'
  }
  return (
    <div className='bg-mobile bg-palatinateBlue rounded-lg z-0 bg-no-repeat w-[375px] h-[172px] md:w-[274px] md:h-[568px] md:bg-desktop' >
      <nav className='flex flex-row md:flex-col justify-center md:justify-start gap-3'>
        <div className='flex flex-row ml-0 md:ml-6 mt-7 md:mt-5'>
            <div className={getStepClass('/')}>1</div>
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 1 </span>
              <span className='font-bold text-white block'>Your info</span>
          </div>
        </div>
        <div className='flex flex-row ml-0 md:ml-6 mt-7 md:mt-5'>
          
            <div className={getStepClass('/step2')}>2</div>
          
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 2</span>
              <span className='font-bold text-white block'>Select plan</span>
          </div>
        </div>
        <div className='flex flex-row ml-0 md:ml-6 mt-7 md:mt-5'>
          
            <div className={getStepClass('/step3')}>3</div>
          
          <div className='ml-3 hidden md:block'>
            <span className=' text-sm text-gray-300'>Step 3</span>
              <span className='font-bold text-white block'>Add-ons</span>
          </div>
        </div>
        <div className='flex flex-row ml-0 md:ml-6 mt-7 md:mt-5'>
          
            <div className={getStepClass('/step4')}>4</div>
         
          <div className='ml-3 hidden md:block '>
            <span className='text-sm text-gray-300'>Step 4</span>
              <span className='font-bold text-white block'>Summary</span>
          </div>
        </div>
      </nav>
     
    </div>
  )
}
