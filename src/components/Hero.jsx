// "use client";
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen text-white text-base overflow-hidden">
//       {/* 🔹 Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/vedio1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* 🔹 Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* 🔹 Content */}
//       <div className="relative z-20 flex items-center justify-center h-full">
//         <h1 className="text-4xl md:text-6xl font-bold">Welcome to Trupeak Health</h1>
//       </div>

//       {/* 🔻 Bottom Border */}
//       <hr className="absolute bottom-0 left-0 w-full border-t border-[#18243A] z-20" />
//     </section>
//   );
// };

// export default Hero;
"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen text-white text-base overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/vedio1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 🔹 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
       <h1
  className="
    text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
    font-bold leading-snug
     pt-[24rem] md:pt-[12rem] lg:pt-[20rem] xl:pt-[28rem]
  "
>
  Welcome to <span className="text-one">Trupeak Health</span>
</h1>

        <h3 className="mt-8 text-base sm:text-lg md:text-xl lg:text-3xl font-medium text-white">
          Let’s begin your healthcare transformation journey
        </h3>
        <div className="mt-6">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#fff] rounded-full flex items-center justify-center shadow-xl">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 5v14m0 0l-7-7m7 7l7-7"
                stroke="#2C886A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Border */}
      <hr className="absolute bottom-0 left-0 w-full border-t border-[#18243A] z-20" />
    </section>
  );
};

export default Hero;
