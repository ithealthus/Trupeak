import React from "react";

const ResultsSection = ({
  title = "The Results?",
  imageSrc,
  imageAlt = "Results Image",
  texts = [],
  bgColor = "#1F2A40",
}) => {
  return (
    <section
      className="py-12 px-4 md:px-10 text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto mb-8">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Text Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {texts.map((text, index) => (
          <p key={index} className="text-lg leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
