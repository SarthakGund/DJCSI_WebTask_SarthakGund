import React from 'react'
import Hotelcard from './components/Hotelcard'



const cardsData = [
    {
      id: 1,
      location: 'London NW8 7JT England',
      hotel_name: 'Danubius Hotel Regents Park',
      price: '$200 Par Night',
      rating: 4.8
    },
    {
      id: 2,
      location: 'London NW8 7JT England',
      hotel_name: 'The Resident Soho',
      price: '$200 Par Night',
      rating: 4.8
    },
    {
      id: 3,
      location: 'London NW8 7JT England',
      hotel_name: 'London Bridge Hotel',
      price: '$200 Par Night',
      rating: 4.8
    }
]


export default function () {
  return (
    <div className="popular-hotels w-[90%] flex my-[110px] flex-col">
        <div className="heading-hotels 3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold">
            Our most popular Hotels
        </div>

        <div className="hotels-description flex justify-between mt-[45px]">
            <div className="hotel-desc-text w-[47%] text-[#6b6c6b] font-semibold text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, debitis quos.
            </div>
            <div className="view-all flex justify-center">
                <button className="view-all-btn text-[#1A945F] w-[104px] h-[46px]  bg-[#eaf7f0] rounded-[23px] text-[16px]">
                    View All
                </button>
            </div>
        </div>

        <div className="hotels mt-[40px] flex justify-evenly items-center flex-wrap">

            {cardsData.map(card => (
            <Hotelcard id={card.id} location={card.location} hotel_name={card.hotel_name} price={card.price} rating={card.rating} />
            ))}
        </div>
    </div>
    )
}
