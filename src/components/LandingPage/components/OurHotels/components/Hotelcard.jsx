import React from "react";
import Image from "next/image";

export default function (props) {
  return (
    <div className="hotel-card bg-white rounded-[14px] shadow-lg w-[350px] flex flex-col my-[40px]">
      <div className="relative w-full">
        <Image src={`/assets/hotel_${props.id}.png`} alt="Danubius Hotel Regents Park" height={400} width={400} />
      </div>

      <div className="p-4 w-[100%] h-[160px] flex flex-col justify-center bg-[#fafafa] rounded-b-[14px]">
        <p className="text-green-500 text-sm mb-2">{props.location}</p>
        <h3 className="text-lg font-semibold mb-2">
          {props.hotel_name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{props.price}</p>
          <div className="flex items-center">
            <div className="flex">
              <span className="text-[#F44336]">★</span>
              <span className="text-[#F44336]">★</span>
              <span className="text-[#F44336]">★</span>
              <span className="text-[#F44336]">★</span>
              <span className="text-gray-300">★</span>
            </div>
            <p className="ml-2 text-gray-600">{props.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
