import React from "react";

const DynamicSection = ({
  title,
  subtitle,
  items,
  backgroundColor = "#0D1B33",
  textColor = "#FFFFFF",
  cardBgColor = "#E8D09A",
  columns = 4
}) => {
  return (
        <section
      className="py-10 px-4 rounded-xl"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
       

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* First div spans 2 columns */}
  <div className="col-span-2">
    <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
    <p className="opacity-80 mb-8 text-xl">{subtitle}</p>
  </div>

  {items.map((item, index) => (
    <div
      key={index}
      className={`rounded-lg overflow-hidden shadow-md ${
        item.type === "text"
          ? `p-4 flex items-start space-x-2 font-medium text-black`
          : `bg-cover bg-center h-32`
      }`}
      style={{
        backgroundColor: item.type === "text" ? cardBgColor : "",
        backgroundImage: item.type === "image" ? `url(${item.image})` : ""
      }}
    >
      {item.type === "text" && (
        <>
          <span className="text-black text-lg">▶</span>
          <p>{item.title}</p>
        </>
      )}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default DynamicSection;
