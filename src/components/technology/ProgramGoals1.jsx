import React from "react";
import Image from "next/image";

export default function ProgramGoals1({
  title,
  description,
  image,
  reverse = false,
  sectionBg = "bg-white",       // Section background color
  bgColor = "bg-two",           // Content card background color
  textColor = "text-white",     // Content text color
  titleSize = "text-3xl md:text-4xl", // Title size classes
  padding = "p-8 md:p-12",      // Card padding
  radius = "rounded-3xl",       // Border radius
  shadow = "shadow-xl",         // Shadow style
  imgWidth = 700,               // Image width
  imgHeight = 500,              // Image height
  buttonText,                   // Optional button text
  buttonLink                    // Optional button link
}) {
  return (
    <section className={`w-full ${sectionBg} py-12 px-6 md:px-12`}>
      <div
        className={`max-w-6xl mx-auto flex ${
          reverse
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col md:flex-row"
        } items-center relative`}
      >
        {/* Content Card */}
        <div
          className={`w-full md:w-1/2 relative z-10 ${bgColor} ${textColor} ${padding} ${radius} ${shadow} ${
            reverse ? "md:-ml-16" : "md:-mr-16"
          }`}
        >
          {title && <h2 className={`${titleSize} font-bold mb-4`}>{title}</h2>}
          <p className="text-lg leading-relaxed mb-6">{description}</p>

          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-block bg-one text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* Image */}
        <div className={`w-full md:w-1/2 ${radius} overflow-hidden relative z-0`}>
          <Image
            src={image}
            alt={title || "Image"}
            width={imgWidth}
            height={imgHeight}
            className={`object-cover w-full h-full ${radius}`}
          />
        </div>
      </div>
    </section>
  );
}
