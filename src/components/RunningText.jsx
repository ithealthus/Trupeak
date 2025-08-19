import React from "react";
import DownArrow from "../utils/svg/DownArrow";

const services = [
  "Regenerative Therapies",
  "Weight and Lean Body Muscle Management",
  "Immunity & Longevity",
];

const RunningText = () => (
  <section className="w-full bg-white py-8 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-10 animate-marquee whitespace-nowrap text-xl font-bold text-two">
        {[...services, ...services].map((service, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2"
          >
            {/* Bigger text */}
            <span className="text-3xl font-body ">{service}</span>

            {/* Slightly smaller, thicker icon */}
            <DownArrow className="w-2 h-2 stroke-2 text-gray-800" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RunningText;
