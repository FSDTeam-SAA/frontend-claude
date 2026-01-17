"use client"
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { UserProfileApiResponse } from './player-data-type';

const GroundField = ({ id }: { id: string }) => {
  const { data} = useQuery<UserProfileApiResponse>({
        queryKey: ["ground-field", id],
        queryFn: async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/detail/${id}`)
            return res.json();
        },
    })

    console.log(data)

    // if (isLoading) {
    //     return <div className="pb-8">
    //         <PlayerInfoSkeleton />
    //     </div>
    // } else if (isError) {
    //     return <div className='py-8'>
    //         <ErrorContainer message={error?.message || "Something went wrong!"} />
    //     </div>
    // }

    const personalInfo = data?.data?.user;
  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-6 ">
      <div className='flex items-center justify-between pb-1 md:pb-4'>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Main Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>{personalInfo?.position?.slice(0, 1) || "N/A"}</span>
        </p>
        <p className='text-center'>
          <span className='text-base md:text-lg font-normal text-black leading-[120%] text-center'>Other Position : </span> <br/>
           <span className='text-lg md:text-xl font-normal text-black leading-[120%] text-center'>{personalInfo?.position?.slice(1, 2) || "N/A"}</span>
        </p>
      </div>

      <Image src="/assets/images/ground-field.png" alt="ground field" width={1000} height={1000} className='w-full h-[200px] md:h-[288px] object-contain'/>
    </div>
  )
}

export default GroundField