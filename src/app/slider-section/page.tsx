"use client";
import { useState } from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderSection() {
  const slides = [
    {
      image: "/slider.jpg",
      text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      button: "سفارش انلاین غذا",
    },
    {
      image: "/slider2.jpg",
      text: "Description for Slide 2",
      button: "بیشتر بخوانیم",
    },
    {
      image: "/slider.jpg",
      text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      button: "سفارش انلاین غذا",
    },
    {
      image: "/slider.jpg",
      text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      button: "سفارش انلاین غذا",
    },
    {
      image: "/slider.jpg",
      text: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      button: "سفارش انلاین غذا",
    },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <>
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] bg-gray-200 flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center text-white relative"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-8 text-center">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-12">
              {slides[current].text}
            </h2>
            <button className="px-3 py-2 sm:px-4 sm:py-2 rounded bg-green-700 hover:bg-green-600 cursor-pointer transition duration-300 text-sm sm:text-base">
              {slides[current].button}
            </button>
          </div>
        </div>
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full text-white hover:cursor-pointer bg-black/30 p-2 sm:p-3 flex items-center justify-center"
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-white hover:cursor-pointer bg-black/30 p-2 sm:p-3 flex items-center justify-center"
        >
          ▶
        </button>
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 px-2 py-1 rounded-full"
          style={{ backgroundImage: "url(/b.png)" }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full ${
                current === i
                  ? "bg-green-700 w-2.5 h-2.5 sm:w-3 sm:h-3 transition-all"
                  : "bg-gray-600 w-2 h-2 sm:w-2.5 sm:h-2.5 transition-all opacity-80"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
