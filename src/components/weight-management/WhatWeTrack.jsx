"use client";
import Image from "next/image";

const WhatWeTrack = ({ title, description, points }) => {
  return (
    <div className="w-full flex flex-col md:flex-row ">
      {/* Left Column (Full Height) */}
      <div className="md:w-1/3 w-full bg-two text-white flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg leading-relaxed">{description}</p>
      </div>

      {/* Right Column (Cards) */}
      <div className="md:w-2/3 w-full bg-one text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 rounded-lg shadow-md bg-white text-two"
            >
              <Image
                src="/images/logoondark.png"
                alt="Tracking"
                width={100}
                height={100}
                className="rounded-lg bg-two"
              />
              <p className="text-sm md:text-base font-medium text-center">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeTrack;
