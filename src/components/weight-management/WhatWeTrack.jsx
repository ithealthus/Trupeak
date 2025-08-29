"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function WhatWeTrack({ title, description, points }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const resizeHeights = () => {
      if (cardsRef.current.length > 0) {
        let maxHeight = 0;

        // reset heights first
        cardsRef.current.forEach((card) => {
          if (card) card.style.height = "auto";
        });

        // find tallest card
        cardsRef.current.forEach((card) => {
          if (card) {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
          }
        });

        // apply tallest height to all
        cardsRef.current.forEach((card) => {
          if (card) card.style.height = `${maxHeight}px`;
        });
      }
    };

    resizeHeights();
    window.addEventListener("resize", resizeHeights);
    return () => window.removeEventListener("resize", resizeHeights);
  }, [points]);

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
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-1 items-stretch bg-white rounded-lg shadow overflow-hidden"
          >
            {/* LEFT BLUE STRIP WITH ICON */}
            <div className="bg-two flex items-center justify-center w-16">
              <Image
                src="/images/logoondark1.png"
                alt="icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* RIGHT TEXT AREA */}
            <div className="p-4 flex-1 flex items-center">
              <p className="text-gray-800 font-semibold text-lg">{point}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
