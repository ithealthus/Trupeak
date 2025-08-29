import React from "react";

const WhatYouReceive = ({
  title,
  subtitle,
  items,
  backgroundColor = "#0D1B33",
  textColor = "#FFFFFF",
  cardBorderColor = "#E8D09A",
  iconBgColor = "#0D1B33",
  iconColor = "#2DD4BF"
}) => {
  return (
    <section
      className="py-10 px-4 rounded-xl"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-one text-left">{title}</h2>
        <p className="opacity-80 mb-10 text-left">{subtitle}</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center"
              style={{ border: `4px solid ${cardBorderColor}` }}
            >
              {/* Icon */}
              <div
                className="absolute left-6 -top-6 rounded-full flex items-center justify-center"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: iconBgColor,
                  border: `3px solid ${cardBorderColor}`
                }}
              >
                <span className="text-2xl" style={{ color: iconColor }}>
                  +
                </span>
              </div>
              {/* Text */}
              <p className="text-center mt-6">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
