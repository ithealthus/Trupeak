"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section className="bg-one rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row 
                    items-start md:items-start justify-between relative overflow-visible 
                    py-12 px-4 sm:px-8 md:px-24 font-body max-w-[1800px] mx-auto">
  {/* Left Content */}
  <div className="flex-1 w-full md:max-w-[50%] z-20 text-center md:text-left space-y-6 md:space-y-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl mx-auto md:mx-0 leading-tight">
      Welcome to <span className="text-[#2c886a]">Trupeak</span>
    </h2>

    <p className="font-body text-[#1a2233] text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto md:mx-0 pb-8 md:pb-12">
      Our mission is to empower every individual to reach their true
      potential—physically, mentally, and emotionally. We’re committed to
      transforming lives by delivering{" "}
      <span className="text-[#2c886a] font-semibold">
        science-backed, personalized health solutions
      </span>{" "}
      that go beyond symptoms to ignite lasting change. Through compassionate
      care, innovation, and community, we help you rise to your peak—every
      single day.
    </p>

    {/* Stats Card */}
    <div
  ref={ref}   // ⬅️ attach the ref here
  className="relative md:absolute md:bottom-[4rem] left-0 md:left-10 w-full sm:w-[90%] md:max-w-[1000px] rounded-[1.5rem] md:rounded-[2rem] px-6 sm:px-10 py-8 md:py-10 z-30 font-body"
  style={{
    backdropFilter: "blur(30px)",
    boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
    backgroundColor: "#ffffffcc",
  }}
>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-10">
        {[
          ["Accuracy Rate", "in diagnostics", 98, "%"],
          ["Years of", "Experience", 15],
          ["Satisfied", "Customers", 13, "K+"],
          ["Countries in", "Services", 38],
        ].map(([line1, line2, end, suffix], idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-2">
              {inView && <CountUp end={end} duration={2.5} separator="," />}
              {suffix || "+"}
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1a2233] font-medium text-center leading-snug">
              {line1} <br /> {line2}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right: Doctor Image */}
  <div className="flex-1 relative hidden md:flex justify-end items-start">
    <img
      src="images/Doctor.jpg"
      alt="Doctor"
      className="h-[24rem] md:h-[30rem] lg:h-[40rem] xl:h-[43rem] w-auto object-cover rounded-[2rem] md:rounded-[3rem] z-10 animate-float shadow-xl"
    />
  </div>
</section>
  );
};

export default MissionSection;
