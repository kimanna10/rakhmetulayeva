"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={12}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => setActiveIndex(i)}
                className="overflow-hidden cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] bg-black">
                  <img
                    src={img}
                    alt=""
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg overflow-hidden">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute text-white top-6 right-6"
          >
            <X size={36} />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              )
            }
            className="absolute text-white left-6 hover:cursor-pointer"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={() =>
              setActiveIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute text-white right-6 hover:cursor-pointer"
          >
            <ChevronRight size={36} />
          </button>

          <img
            src={images[activeIndex]}
            className="object-contain max-w-[90%] max-h-[90%]"
          />
        </div>
      )}
    </>
  );
}
