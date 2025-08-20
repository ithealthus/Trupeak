"use client";
import Image from "next/image";

export default function WhatWeTrack({ title, description, points }) {
  return (
    <section className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 bg-one">
  
    
    {/* LEFT SIDE (1/3) */}
    <div className="bg-two text-white p-10 flex flex-col justify-center md:col-span-1 rounded-r-2xl">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>

    {/* RIGHT SIDE (2/3) */}
    <div className="bg-one p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
      {points.map((point, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow"
        >
          {/* ICON */}
          <div className="bg-[#0D1B33] flex items-center justify-center w-10 h-10 rounded-md">
  <Image
    src="/images/lagoon1.png" // <-- replace with your actual icon path
    alt="icon"
    width={24}
    height={24}
    className="object-contain"
  />
</div>
          {/* TEXT */}
          <p className="text-gray-800 text-sm">{point}</p>
        </div>
      ))}
    </div>
  
</section>

  );
}
