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
              className="bg-[#0C2340] text-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
