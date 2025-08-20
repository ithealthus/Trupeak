"use client";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";


export default function WhoThisIsFor({
  title,
  description,
  items,
  bgColor = "#FFFFFF",
  titleColor = "#FFFFFF",
  cardBgColor = "#FFFFFF",
}) {
  return (
    <section
      className=" shadow-lg p-10 max-w-8xl mx-auto mt-10 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl font-bold mb-4" style={{ color: titleColor }}>
        {title}
      </h2>
      <p className="mb-8 text-gray-200">{description}</p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-xl shadow-md p-5 flex items-center gap-3 h-full border-one border-4"
              style={{ backgroundColor: cardBgColor, color: "black" }}
            >
              <CheckCircle className="text-three text-bold w-8 h-8 flex-shrink-0" />
              <p className="text-sm font-medium">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
