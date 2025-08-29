
import React from "react";
import Link from 'next/link';
const TransformNow = () => {
  return (
    <section className="relative bg-white min-h-[500px] overflow-hidden px-4 sm:px-8 md:px-12">
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 pt-16 sm:pt-20 md:pt-24 text-center lg:text-left">
        {/* Left: Text & Button */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-body text-two leading-snug mb-4">
            Ready to begin your healthcare
            <br className="hidden sm:block" />
            transformation journey?
          </h2>
          <p className="font-body text-primary text-sm sm:text-base md:text-lg font-semibold max-w-md mb-6">
            Book your appointment or request a call-back.
          </p>
          <Link href="/contact">
  <button className="bg-[#2C886A] text-white text-lg sm:text-xl font-bold font-body px-6 sm:px-10 py-2 rounded-[40px] shadow-lg hover:bg-[#287256] transition">
    Transform Now
  </button>
</Link>
        </div>

        {/* Spacer for layout on desktop */}
        <div className="hidden lg:block flex-1" />
      </div>

      {/* Decorative Image */}
      <img
        src="/images/ringImage.png"
        alt="Decorative rings"
        className="absolute right-0 bottom-0 w-[80vw] sm:w-[65vw] max-w-[900px] h-auto object-contain pointer-events-none select-none z-0 opacity-80"
      />
    </section>
  );
};

export default TransformNow;
