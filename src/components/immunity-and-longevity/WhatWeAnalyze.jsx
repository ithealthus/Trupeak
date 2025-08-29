"use client";
import Image from "next/image";

export default function AnalyzeSection({ sectionData }) {
  const { title, subtitle, items } = sectionData;

  return (
    <section className="w-full py-16 bg-[#F5F6FA] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          {subtitle}
        </p>

        {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {items.map((item, i) => (
    <div
      key={i}
      className="bg-two text-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center  justify-start p-6"
    >
      {/* Image */}
      <div className="flex justify-center items-center w-full mb-4">
        <Image
          src={item.img}
          alt={item.title}
          width={1000} // or dynamic based on design
          height={1000}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col text-left w-full">
        <h3 className="font-semibold text-xl mb-2 text-one">{item.title}</h3>
        <p className="text-sm text-one">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
