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
<div className="flex flex-col md:flex-row items-center justify-center gap-x-6">
  {/* Left side points */}
  <div className="flex flex-col gap-y-4">
    {pointsLeft.map((point, index) => (
      <div
        key={index}
        className="bg-[#E8D09A] p-4 text-left shadow-md text-gray-900 font-medium w-[280px] flex items-center"
        style={{
          borderTopLeftRadius: index === 0 ? "12px" : 0,
          borderBottomLeftRadius: index === pointsLeft.length - 1 ? "12px" : 0
        }}
      >
        • {point}
      </div>
    ))}
  </div>

  {/* Center Image */}
  <div className="flex-shrink-0 flex mx-4">
    <img
      src={image}
      alt="Monitoring"
      className="h-[70vh] max-h-[80vh] w-[400px] object-cover rounded-md"
    />
  </div>

  {/* Right side points */}
  <div className="flex flex-col gap-y-4">
    {pointsRight.map((point, index) => (
      <div
        key={index}
        className="bg-[#E8D09A] p-4 text-left shadow-md text-gray-900 font-medium w-[280px] flex items-center"
        style={{
          borderTopRightRadius: index === 0 ? "12px" : 0,
          borderBottomRightRadius: index === pointsRight.length - 1 ? "12px" : 0
        }}
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
