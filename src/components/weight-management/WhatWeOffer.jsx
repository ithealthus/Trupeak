"use client";
import Image from "next/image";
import { FaRegSquare } from "react-icons/fa";

const WhatWeOffer = ({ title, description, points, image, footer }) => {
  return (
    <section className="w-full py-12 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Image */}
        <div className="md:w-1/3 w-full">
          <Image
            src={image}
            alt={title || "What We Offer"}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 w-full">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

          {/* Description */}
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            {description}
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-two text-white rounded-lg p-4 shadow-md flex flex-col"
              >
                <div className="flex items-center mb-2">
                  <FaRegSquare className="text-yellow-500 mr-2" />
                  <h3 className="font-semibold text-lg">{point.title}</h3>
                </div>
                <p className="text-sm">{point.description}</p>
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
