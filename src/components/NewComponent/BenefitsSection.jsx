"use client";
import React from "react";
import Image from "next/image";

export default function BenefitsSection({ heading, items, image }) {
  return (
    <section className="w-full bg-[#D9C68E] py-12 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Wrapper */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Heading */}
            <div className="lg:w-[62%] bg-[#1E2244] text-[#4CE0B3] font-semibold lg:font-bold text-2xl md:text-4xl rounded-3xl p-6 flex items-center justify-center text-left">
              {heading}
            </div>
            {/* First 2 items */}
            {items.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="py-10 lg:w-[35%] bg-[#1E2244] text-white rounded-3xl p-6 flex items-start justify-center text-left"
              >
                <p className="text-xl w-full">{item}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Next 3 items */}
            {items.slice(2, 5).map((item, idx) => (
              <div
                key={idx}
                className="py-10 lg:w-1/4 bg-[#1E2244] text-white rounded-3xl p-6 flex items-center justify-center text-left"
              >
                <p className="text-xl w-full">{item}</p>
              </div>
            ))}

            {/* Image Box */}
            {image && (
              <div className="flex- rounded-3xl overflow-hidden flex items-center justify-center">
                <Image
                  src={image}
                  alt="Benefit Illustration"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
