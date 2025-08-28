// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, AnimatePresence } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const servicesData = [
//   {
//     id: 1,
//     title: "Regenerative Therapies",
//     description:
//       "NAD⁺ therapy, targeted peptides, and intravenous treatments are crafted to enhance vitality, support immune function, and promote cellular recovery.",
//     image: "/images/toWEBP/1.webp",
//   },
//   {
//     id: 2,
//     title: "Dr Sanjith’s CEO Protocol",
//     description:
//       "Weight & Lean-Muscle Management that combines Precision Nutrition Management, Indirect Calorimetry, and MuscleSound (Ultrasound to measure Lean Body Mass).",
//     image: "/images/toWEBP/2.webp",
//   },
//   {
//     id: 3,
//     title: "Immunity & Longevity",
//     description:
//       "Genetic mapping, Gut Microbiome Analysis, and Biological-Age testing to keep your immune system resilient.",
//     image: "/images/toWEBP/3.webp",
//   },
//   {
//     id: 4,
//     title: "Women-Centric Health",
//     description:
//       "PCOS/PCOD support, Menopause care, Hormone Balancing, and post-Hysterectomy recovery in one coordinated pathway.",
//     image: "/images/toWEBP/4.webp",
//   },
//   {
//     id: 5,
//     title: "Beauty & Aesthetics",
//     description:
//       "Advanced Aesthetics, including medical-grade laser treatments, customized body sculpting, body contouring, dermatology procedures and injectables (Botox, PRP, and Glutathione).",
//     image: "/images/toWEBP/5.webp",
//   },
//   {
//     id: 6,
//     title: "Pain Management & Recovery",
//     description:
//       "Sports rehabilitation, Joint therapy, localized Cryotherapy, and Advanced Pain Management peptides for faster and enduring healing.",
//     image: "/images/toWEBP/6.webp",
//   },
// ];

// const GSAPPopOutCards = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);

//   // Detect window width
//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // GSAP for Desktop
//   useEffect(() => {
//     if (windowWidth >= 640) {
//       const ctx = gsap.context(() => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top top",
//             end: "+=1500",
//             scrub: true,
//             pin: true,
//             onUpdate: (self) => {
//               const index = Math.min(
//                 servicesData.length - 1,
//                 Math.floor(self.progress * servicesData.length)
//               );
//               setActiveIndex(index);
//             },
//           },
//         });

//         servicesData.forEach((_, i) => {
//           const cardSelector = `.card-${i}`;
//           tl.to(
//             cardSelector,
//             {
//               scale: 1.05,
//               y: -200,
//               opacity: 0,
//               duration: 0.5,
//               ease: "power2.inOut",
//             },
//             "+=0.1"
//           );
//         });
//       }, containerRef);

//       return () => ctx.revert();
//     }
//   }, [windowWidth]);

//   // Mobile slider navigation
//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % servicesData.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? servicesData.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full min-h-screen bg-[#0f172a] text-white overflow-hidden sm:rounded-[3rem] rounded-[2rem] p-4"
//     >
//       {/* Section Title */}
//       <h2 className="text-2xl sm:text-4xl font-semibold text-center tracking-wide text-[#f5d88c] mb-6">
//         Solutions With Purpose
//       </h2>

//       {/* Description for Desktop Only */}
//       {windowWidth >= 640 && (
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex + "-desc"}
//             className="text-[14px] sm:text-[15px] max-w-sm mx-auto sm:absolute sm:top-[120px] sm:right-[80px] font-medium text-center sm:text-left mb-4 sm:mb-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//           >
//             <p>{servicesData[activeIndex].description}</p>
//           </motion.div>
//         </AnimatePresence>
//       )}

//       {/* ✅ Mobile Slider */}
//       {windowWidth < 640 && (
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {servicesData.map((service) => (
//                 <div
//                   key={service.id}
//                   className="flex-shrink-0 w-full h-[400px] relative rounded-2xl overflow-hidden"
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
//                     <h3 className="text-2xl font-bold">{service.title}</h3>
//                     <button className="mt-3 px-4 py-2 bg-white rounded-full text-black font-semibold shadow hover:bg-gray-200">
//                       Know More
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
//           >
//             ❮
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
//           >
//             ❯
//           </button>

//           {/* Pagination Dots */}
//           <div className="flex justify-center mt-2 gap-2">
//             {servicesData.map((_, i) => (
//               <div
//                 key={i}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   i === activeIndex ? "bg-[#f5d88c]" : "bg-white/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ✅ Desktop Cards */}
//       {windowWidth >= 640 && (
//         <div className="hidden sm:block relative w-full h-[480px]">
//           {servicesData.map((service, i) => {
//             const rotation = (i - 2) * 10;
//             const offset = i * 10;
//             const isActive = i === activeIndex;

//             return (
//               <div
//                 key={service.id}
//                 className={`card-${i} absolute w-[370px] h-[480px] bg-[#c69c6d] rounded-[30px] shadow-xl text-black transition-all duration-300 flex flex-col justify-end ${
//                   isActive ? "scale-105 shadow-2xl z-50" : "opacity-80"
//                 }`}
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${offset}px, ${offset}px)`,
//                   top: "50%",
//                   left: "50%",
//                   zIndex: servicesData.length - i + (isActive ? 100 : 0),
//                 }}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-64 object-cover rounded-t-[30px]"
//                 />
//                 <div className="flex flex-row items-center justify-between px-3 py-4">
//                   <h3 className="text-2xl font-bold">{service.title}</h3>
//                   <button className="px-4 py-3 bg-white rounded-full text-sm font-semibold text-black shadow hover:bg-gray-200">
//                     Know More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GSAPPopOutCards;
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, AnimatePresence } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const servicesData = [
//   {
//     id: 1,
//     title: "Regenerative Therapies",
//     description:
//       "NAD⁺ therapy, targeted peptides, and intravenous treatments are crafted to enhance vitality, support immune function, and promote cellular recovery.",
//     image: "/images/toWEBP/1.webp",
//   },
//   {
//     id: 2,
//     title: "Dr Sanjith’s CEO Protocol",
//     description:
//       "Weight & Lean-Muscle Management that combines Precision Nutrition Management, Indirect Calorimetry, and MuscleSound (Ultrasound to measure Lean Body Mass).",
//     image: "/images/toWEBP/2.webp",
//   },
//   {
//     id: 3,
//     title: "Immunity & Longevity",
//     description:
//       "Genetic mapping, Gut Microbiome Analysis, and Biological-Age testing to keep your immune system resilient.",
//     image: "/images/toWEBP/3.webp",
//   },
//   {
//     id: 4,
//     title: "Women-Centric Health",
//     description:
//       "PCOS/PCOD support, Menopause care, Hormone Balancing, and post-Hysterectomy recovery in one coordinated pathway.",
//     image: "/images/toWEBP/4.webp",
//   },
//   {
//     id: 5,
//     title: "Beauty & Aesthetics",
//     description:
//       "Advanced Aesthetics, including medical-grade laser treatments, customized body sculpting, body contouring, dermatology procedures and injectables (Botox, PRP, and Glutathione).",
//     image: "/images/toWEBP/5.webp",
//   },
//   {
//     id: 6,
//     title: "Pain Management & Recovery",
//     description:
//       "Sports rehabilitation, Joint therapy, localized Cryotherapy, and Advanced Pain Management peptides for faster and enduring healing.",
//     image: "/images/toWEBP/6.webp",
//   },
// ];

const GSAPPopOutCards = () => {
  // const containerRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(0);

  // // Detect window width
  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // GSAP for Desktop
  // useEffect(() => {
  //   if (windowWidth >= 640) {
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top top",
  //           end: "+=1500",
  //           scrub: true,
  //           pin: true,
  //           onUpdate: (self) => {
  //             const index = Math.min(
  //               servicesData.length - 1,
  //               Math.floor(self.progress * servicesData.length)
  //             );
  //             setActiveIndex(index);
  //           },
  //         },
  //       });

  //       servicesData.forEach((_, i) => {
  //         const cardSelector = `.card-${i}`;
  //         tl.to(
  //           cardSelector,
  //           {
  //             scale: 1.05,
  //             y: -200,
  //             opacity: 0,
  //             duration: 0.5,
  //             ease: "power2.inOut",
  //           },
  //           "+=0.1"
  //         );
  //       });
  //     }, containerRef);

  //     return () => ctx.revert();
  //   }
  // }, [windowWidth]);

  // // Mobile slider navigation
  // const nextSlide = () => {
  //   setActiveIndex((prev) => (prev + 1) % servicesData.length);
  // };

  // const prevSlide = () => {
  //   setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  // };

  return (
    <div className="bg-[#1A243A] rounded-3xl">
      <div className="py-12 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <h2 className="sm:text-xl md:text-xl lg:text-4xl font-semibold text-[#E1C78F] mb-8 ps-12">
          Solutions With Purpose
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 max-w-[380px] sm:max-w-[380px] mx-auto border-4 border-[#E1C78F] h-[450px]">
            {/* Background Image */}
            <img
              src="/images/home-cards/card-1.webp"
              alt="Regenerative Therapies"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
            {/* Text Content */}
            <div className="relative z-10 p-4 flex flex-col justify-start h-full">
              <h2 className="text-white font-semibold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl mt-3">
                Regenerative Therapies
              </h2>
              <p className="text-white text-base sm:text-lg md:text-lg lg:text-lg mb-3 mt-3 font-semibold">
                NAD⁺ therapy, targeted peptides, and intravenous treatments are
                crafted to enhance vitality, support immune function, and
                promote cellular recovery.
              </p>
              <button className="mt-auto w-full bg-[#E8D3A2] text-[#1A243A] py-3 rounded-full text-base font-semibold hover:bg-[#d1b77b] transition-colors duration-300">
                <a href="/services/regenerative-therapies/restorative-medicine">
                  Know More
                </a>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/home-cards/card-2.webp"
              alt="Dr. Sanjith CEO Protocol"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
              <h3 className="text-white font-bold text-lg text-center">
                Dr. Sanjith’s CEO Protocol
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/home-cards/card-3.webp"
              alt="Dr. Sanjith CEO Protocol"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
              <h3 className="text-white font-bold text-lg text-center">
                Immunity & Longevity
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/home-cards/card-4.webp"
              alt="Dr. Sanjith CEO Protocol"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
              <h3 className="text-white font-bold text-lg text-center">
                Women-Centric Health
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/home-cards/card-5.webp"
              alt="Dr. Sanjith CEO Protocol"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
              <h3 className="text-white font-bold text-lg text-center">
                Beauty & Aesthetics
              </h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/home-cards/card-6.webp"
              alt="Dr. Sanjith CEO Protocol"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
              <h3 className="text-white font-bold text-lg text-center">
                Pain Management & Recovery
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSAPPopOutCards;
