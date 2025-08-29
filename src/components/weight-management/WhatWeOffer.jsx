"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const WhatWeOffer = ({ title, description, points, image, footer }) => {
  return (
    <section className="w-full py-12 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* LEFT IMAGE */}
        {image && (
          <div className="md:w-1/3 w-full flex">
            <Image
              src={image}
              alt={title && title.trim() !== "" ? title : "What We Offer"}
              width={600}
              height={800}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className="md:w-2/3 w-full flex flex-col">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

          {/* Description */}
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            {description}
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 flex-grow">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-two text-white rounded-lg p-4 shadow-md h-full"
              >
                {/* Row 1: Icon + Title */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full">
                    <FaPlay className="text-one" size={28} />
                  </div>
                  <h3 className="font-semibold text-xl">{point.title}</h3>
                </div>

                {/* Row 2: Description */}
                <p className="text-sm ml-12">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          {footer && <p className="text-sm text-gray-700">{footer}</p>}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
