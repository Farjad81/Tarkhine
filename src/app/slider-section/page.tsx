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
      <div className="relative w-full h-[300px] bg-gray-200 flex items-center justify-center">
        <div
          className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center text-white "
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-12">{slides[current].text}</h2>
            <button className="px-4 py-2  rounded bg-green-700 hover:bg-green-600 cursor-pointer after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
              {slides[current].button}
            </button>
          </div>
        </div>
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2  rounded text-white hover:cursor-pointer"
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2  text-white hover:cursor-pointer"
        >
          ▶
        </button>
        <div
          className="absolute w-40 h-7 justify-center items-center bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 "
          style={{ backgroundImage: "url(/b.png)" }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1 h-1 rounded-full ${
                current === i
                  ? "bg-green-700 w-2.5 h-2.5"
                  : "bg-gray-600 scale-130"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
