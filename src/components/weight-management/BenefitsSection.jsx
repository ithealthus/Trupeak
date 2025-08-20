import React from "react";

export default function BenefitsSection({ title, benefits, bgColor = "bg-white" }) {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#122644] mb-8">
          {title}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md p-6 text-white text-left text-md font-medium leading-relaxed ${benefit.bgColor}`}
            >
              {benefit.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

