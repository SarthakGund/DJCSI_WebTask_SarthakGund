import React from 'react'
import Image from 'next/image'

export default function(props) {
  return (
    <div className="facility-card flex flex-col items-center p-4 bg-white rounded-lg shadow-md h-[150px] w-[150px] justify-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
      <div className="icon mb-2">
        <Image src={`/assets/${props.icon}.svg`} alt='' width={50} height={50} />
      </div>
      <p className="text-gray-700 text-[13px]">{props.title}</p>
    </div>
  )
}
