import React from 'react'
import Image from 'next/image'

const GroundField = () => {
  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-6 ">
      <div className='flex items-center justify-between pb-1 md:pb-4'>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Main Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>Attacking Midfield</span>
        </p>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Other Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>CB</span>
        </p>
      </div>

      <Image src="/assets/images/ground-field.png" alt="ground field" width={1000} height={1000} className='w-full h-[200px] md:h-[288px] object-contain'/>
    </div>
  )
}

export default GroundField