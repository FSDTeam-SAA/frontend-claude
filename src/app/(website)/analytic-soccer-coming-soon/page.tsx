import Image from 'next/image'
import React from 'react'

const AnalyticSoccerPage = () => {
  return (
    <div className="bg-[#CDFFCD] py-10 md:py-16 lg:py-40 xl:py-60">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="md:col-span-1 h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-[150%] pb-2 md:pb-5 lg:pb-6">Analytic Soccer + Coming Soon</h3>
                <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%] py-3 md:py-4'>The Player Evaluation Program (U9–U18) is a long-term, structured talent assessment system designed to monitor, guide, and support a player’s development over time.</p>
                <h4 className='text-lg md:text-xl lg:text-2xl text-[#424242] leading-[150%] font-normal'>It serves as a fair talent identification pathway that considers each player’s:</h4>

                <ul className='py-3 md:py-4'>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal'>•  Maturity</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal py-2 md:py-3'>• Learning pace</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal'>• Motivation</li>
                    <li className='text-sm md:text-base text-[#424242] leading-[150%] font-normal py-2 md:py-3'>• Training and playing environment</li>
                </ul>

                <p className='text-sm md:text-base text-[#424242] font-normal leading-[150%]'>The objective is to guide and improve the player’s development over time.</p>
            </div>
            <div className="md:col-span-1">
                <Image src="/assets/images/analytic-soccer.jpg" alt="Analytic Soccer Coming Soon" width={500} height={500} className='w-fullh-[400px] mg:h-[501px] rounded-[16px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default AnalyticSoccerPage