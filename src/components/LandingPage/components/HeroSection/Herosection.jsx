import React from 'react'
import Image from 'next/image'

export default function () {
  return (
    <div className="hero-section w-[90%] flex">
                <div className="left-section bg-[#F6FCFA] flex flex-col rounded-tl-[48px]">
                    <div className='flex justify-center mt-[70px]'>
                        <div className="w-[85%] left-heading font-semibold 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl">
                            Find your perfect place to stay.
                        </div>
                    </div>
                    <div className='flex justify-center mt-[50px]'>
                        <div className="left-body w-[85%] text-[#6b6c6b] text-[18px] font-semibold">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iure.
                        </div>
                    </div>
                    <div className='flex justify-center mt-[50px]'>
                        <div className="watch-now  w-[85%] flex items-center 3xl:text-2xl 2xl:text-xl xl:text-md lg:text-md md:text-base sm:text-sm font-semibold">
                                <button className='bg-[#1A945F] h-[38px] w-[38px] flex justify-center items-center rounded-[19px] flex-row mr-[20px]'>
                                    <Image height={13} width={13} src="/assets/play.svg" alt="" />
                                </button>
                            Watch video
                        </div>
                    </div>
            </div>
            <div className="right-section">
                <Image src='/assets/right_section.png' height={640} width={640} alt=""/>
            </div>
        </div>
  )
}
