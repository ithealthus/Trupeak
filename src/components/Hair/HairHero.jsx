import React from 'react'
import Image from "next/image";

const HairHero = ({ title, subtitle, mainImage, circleImage }) => {
  return (
      <section className="relative w-full bg-two overflow-hidden mt-20 ">
        <div className="flex flex-col md:flex-row items-stretch w-full relative lg:min-h-[90vh]">          
          {/* Left Section (Text) */}
            <div className="bg-two text-white flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:w-1/2 relative z-10 md:pr-20 lg:pr-32">
                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                {title}
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl">
                {subtitle}
                </p>
            </div>
          {/* Right Section (Main Image) */}
          <div className="relative md:w-1/2 h-[400px] sm:h-[500px] md:h-auto">
            <Image
              src={mainImage}
              alt="Main banner"
              fill
              className="object-cover"
              priority
            />
          </div>
  
          {/* Center Overlay Circle */}
          {circleImage && (
            <div
              className="absolute z-20 rounded-full overflow-hidden w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <Image
                src={circleImage}
                alt="Circular overlay"
                fill
                className="object-cover rounded-full"
              />
            </div>
          )}
        </div>
      </section>
  )
}

export default HairHero