import React from "react";

const MonitoringSection = ({ title, description, image, pointsLeft, pointsRight }) => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B33] mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center  ">
          
          {/* Left points */}
          <div className="flex flex-col justify-between gap-6">
            {pointsLeft.map((point, index) => (
              <div
                key={index}
                className="bg-one p-6 text-left shadow-md text-gray-900 font-medium w-[260px] md:w-[280px] rounded-md"
              >
                • {point}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={image}
              alt="Monitoring"
              className="h-[420px] md:h-[500px] lg:h-[600px] w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right points */}
          <div className="flex flex-col justify-between gap-6">
            {pointsRight.map((point, index) => (
              <div
                key={index}
                className="bg-one p-6 text-left shadow-md text-gray-900 font-medium w-[260px] md:w-[280px] rounded-md"
              >
                • {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;
