"use client";
import React from "react";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function ProcedureSummary({ heading, procedures, bottomText }) {
  return (
    <section className="w-full bg-[#1A1D3A] py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        {heading && (
          <h2 className="text-2xl md:text-4xl font-bold text-[#D9C68E] mb-10">
            {heading}
          </h2>
        )}

        {/* Cards */}
       <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
  {procedures?.map((item, index) => (
    <div
      key={index}
      style={{ boxShadow: "#00000040" }}
      className="bg-white shadow-lg mb-5 rounded-2xl p-6 relative border-4 border-[#D9C68E] flex-1 md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
    >
      <div className="absolute -top-6 left-6 bg-[#1A1D3A] border-4 border-white rounded-full w-14 h-14 flex items-center justify-center shadow-md">
        <Image
          src="/images/beauty/hair/plus.svg"
          alt="plus"
          width={28}
          height={28}
          className="text-[#D9C68E] w-7 h-7"
        />
      </div>
      <h3 className="font-bold text-2xl mt-6 mb-2">{item.title}</h3>
      <p className="text-gray-700 text-lg">{item.description}</p>
    </div>
  ))}
</div>


        {/* Bottom Text */}
        {bottomText && (
          <div className="mt-10 text-center md:text-left">
            {bottomText.map((line, i) => (
              <p
                key={i}
                className={`text-xl text-white ${i === bottomText.length - 1 ? "font-medium" : "mb-2"}`}
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
