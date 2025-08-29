import React from 'react';

const ApproachSection = ({ title, image, description }) => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B33] mb-6">
          {title}
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="w-full md:w-3/4 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <img
              src={image}
              alt="Why Our Approach Works"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-two leading-relaxed max-w-4xl text-left mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ApproachSection;
