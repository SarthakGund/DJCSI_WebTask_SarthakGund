import React from 'react'

export default function Map() {
  return (
    <div className="h-[300px] w-[90%] mt-[100px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1554.882785447669!2d72.83658800326207!3d19.107154685896337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c652d7f0cb%3A0xeadda4ea41c40996!2sD.J.%20Sanghvi%20Canteen!5e0!3m2!1sen!2sin!4v1724074516092!5m2!1sen!2sin"  width="1100" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className='relative bottom-[130px] flex justify-center'>
            <div className='w-[90%] bg-white flex justify-center items-center rounded-[10px]'>
                <div className="location max-w-[80%] py-[20px] pr-[40px] flex flex-col">
                        <div className="heading text-md lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold pb-[5px]">
                            Location of our Hotelos
                        </div>
                        <div className="desc text-[14px] text-[#656565] max-w-[500px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum deleniti in ratione?
                        </div>
                </div>                                                          
                <div className="location-right text-[16px]">
                    <label>
                        <input name="" placeholder='Enter your email' className='bg-[#dddddd] border-[0px] text-[#797979] rounded-l-full h-[42px] w-[300px] px-[18px]'/>
                        <button className=' bg-[#1A945F] text-[#ffffff] h-[42px] px-[14px] text-[14px] rounded-full relative right-[20px] cursor-pointer bottom-[1px]'>
                            Contact
                        </button>
                    </label>
                </div>
            </div>
        </div>
    </div>   
  )
}
