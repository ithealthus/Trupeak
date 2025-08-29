"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ProgramFit({ heading, description, items, note, image }) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
          {heading}
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left Image */}
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={image}
                alt="Hair Consultation"
                width={1000}
                height={1000}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg lg:text-xl font-medium mb-5">
              {description}
            </p>

            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <Image
                src='/images/beauty/hair/arrow.svg'
                alt="Hair Consultation"
                width={30}
                height={30}
                className="object-cover  mt-1"
              />
                  <span className="text-lg lg:text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        {note && (
          <p className="text-black text-lg lg:text-[22px] mt-6">{note}</p>
        )}
      </div>
    </section>
  );
}
