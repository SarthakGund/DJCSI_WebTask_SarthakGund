import React from 'react'
import Image from 'next/image'
import Herosection from './components/HeroSection/Herosection'
import OurHotels from './components/OurHotels/OurHotels'
import Facilities from './components/Facilities/Facilities'
import Map from './components/Map/Map'



export default function LandingPage() {
  return (
    <div className="flex justify-center items-center mt-[30px] flex-col">
        <Herosection/>
        <OurHotels/>
        <Facilities/>
        <Map/>
    </div>
  )
}
