import React from 'react'

export default function Map() {
  return (
    <div className="h-[300px] w-[90%] mt-[100px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1554.882785447669!2d72.83658800326207!3d19.107154685896337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c652d7f0cb%3A0xeadda4ea41c40996!2sD.J.%20Sanghvi%20Canteen!5e0!3m2!1sen!2sin!4v1724074516092!5m2!1sen!2sin"  width="1100" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="location relative bottom-[30px]">
                <div className="heading text-md lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                    Location of our Hotelos
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum deleniti in ratione?
                </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <div className="location-right text-[16px]">
                <label>
                    Text input: <input name="myInput" />
                </label>
            </div>
        </div>   
    </div>
  )
}
