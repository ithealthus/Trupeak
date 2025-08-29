import React from "react";

const InfoCard = ({ type, title, image }) => {
  if (type === "image") {
    return (
      <div
        className="rounded-lg overflow-hidden shadow-md bg-cover bg-center h-32"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    );
  }

  return (
    <div className="bg-[#F8E9C1] text-black rounded-lg p-4 flex items-center justify-center text-center font-medium shadow-md">
      {title}
    </div>
  );
};

export default InfoCard;
