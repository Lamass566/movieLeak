"use client"

import React, {useState} from "react"

const Banner = () => {

  const slides = [
    {
      url: "/assets/banners/imgonline-com-ua-Resize-GkNOvHkIRFAfv.jpg"
    },
    {
      url: "/assets/banners/Batman_V_Superman_Banner_Print_Exp_HQ_JPosters-1000x402 (1).jpg"
    },
    {
      url: "/assets/banners/imgonline-com-ua-Resize-h8sgUNKNWxd.jpg"
    },
    {
      url: "/assets/banners/imgonline-com-ua-Resize-oyehIQ21Ver.jpg"
    },
  ]

  const[currentPosition, setCurrentPosition] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentPosition === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentPosition - 1;
    setCurrentPosition(newIndex); 
  }
  const nextSlide = () => {
    const isLastSlide = currentPosition === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentPosition + 1;
    setCurrentPosition(newIndex); 
  }
  return (
      <section className="group rounded-2xl w-full h-full max-w-[1000px] max-h-[402px] relative overflow-hidden">
        <img src={`${slides[currentPosition].url}`} className="object-contain duration-500 w-full h-full max-w-[1000px] max-h-[402px] transition-transform transform hover:scale-105" alt="Описание изображения"/>
        
        <div className="absolute inset-0 bg-gradient-to-tr ease-in duration-700 from-black to-transparent opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex items-center justify-center w-full h-full relative">
            <button className="w-[35px] h-[35px] bg-transparent absolute top-1/2 left-[40px] transform -translate-x-1/2 -translate-y-1/2 text-center" onClick={prevSlide}><img src="/assets/arrow-sm-left-svgrepo-com.svg" alt="" /></button>
            <button className="w-[35px] h-[35px] bg-transparent absolute top-1/2 right-[22px] transform -translate-x-1/2 -translate-y-1/2 text-center" onClick={nextSlide}><img src="/assets/arrow-sm-right-svgrepo-com.svg" alt="" /></button>
          </div> 
        </div>

      </section>
  )
}

export default Banner;