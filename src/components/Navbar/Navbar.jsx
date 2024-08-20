import React from 'react'
import { classnames } from "@/utils";
import { highlightBg, subheading } from '@/constants';

export default function Navbar() {
  return (
    <div className={classnames("flex h-[80px] justify-center")}>
        <div className={classnames("w-[94%] flex items-center justify-between",)}>
          <div className={classnames('logo font-bold 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-2xl')}>Lorem ipsum</div>
          <div className={classnames("div-routes flex gap-[8%] w-[45%] text-[14px] font-semibold text-[#343434]",)}>
            <div className={classnames("routes",)}>Booking</div>
            <div className={classnames("routes",)}>Facilities</div>
            <div className={classnames("routes",)}>About Us</div>
            <div className={classnames("routes",)}>Location</div>
            <div className={classnames("routes",)}>Contact</div>
          </div>
          <div className={classnames("login text-white",)}>
            <button className={classnames('login-btn bg-[#1A945F] h-[40px] w-[90px] rounded-[20px]', highlightBg)}>
              Login
            </button>
          </div>
        </div>
      </div>
  )
}
