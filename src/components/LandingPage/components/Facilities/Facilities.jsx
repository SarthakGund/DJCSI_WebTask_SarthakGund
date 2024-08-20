import React from 'react'
import FacilitiesCard from './components/FacilitiesCard'


const facilities = [
    { icon: 'workspace', title: 'Private Workspace' },
    { icon: 'parking', title: 'Parking Area' },
    { icon: 'breakfast', title: 'Breakfast' },
    { icon: 'wifi', title: 'Free Wifi' },
    { icon: 'electricity', title: 'Free Electricity' },
    { icon: 'swimming', title: 'Swimming Pool' },
    { icon: 'exercise', title: 'Exercise Space' },
    { icon: 'others', title: 'Other Service' },
  ];


export default function Facilities() {
  return (
    <div className='flex w-[90%] '>
        <div className="facilities-left w-[500px] pt-[40px]">
            <div className="facilities-title 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold mb-[30px]">
                We do our best facilities
            </div>
            <div className="facilities-desc text-[#6b6c6b] font-semibold text-[16px] mt-[40px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam pariatur quos id, dolorem delectus, explicabo suscipit unde voluptatibus alias iusto officia.
            </div>
            <div className="contact-now my-[40px]">
                <button className="contact-now-btn bg-[#1A945F] text-white  h-[44px] w-[140px] rounded-[22px]">
                    Contact Now
                </button>
            </div>
        </div>
        <div className="facilities-right flex flex-wrap justify-evenly flex-1 flex-shrink-0 basis-[21%] pt-[40px]">
            {facilities.map((facility, index) => (
            <FacilitiesCard key={index} icon={facility.icon} title={facility.title} />
            ))}
        </div>
    </div>
  )
}


