import React, { useState, useEffect } from "react";
import bgVideo from "../assets/dubai_cover.mp4";
import bgVideo2 from "../assets/shanghai_cover.mp4";

const slides = [
  {
    video: bgVideo,
    eyebrow: "Premium Group Tours",
    title: "Hello Travel",
    description:
      "Хил давсан аяллыг хурдан төлөвлөж, найдвартай багтайгаар шинэ хотуудыг мэдэр.",
  },
  {
    video: bgVideo2,
    eyebrow: "Spring 2026 Departures",
    title: "Shanghai to Istanbul",
    description:
      "Бизнес аялал, амралт, гэр бүлийн маршрут бүгдийг нэг платформоос сонго.",
  },
];

function VideoComponents() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[index];

  return (
    <section
      id="home"
      className="relative min-h-[72svh] overflow-hidden bg-stone-950 sm:min-h-[100svh]"
    >
      <video
        key={index}
        src={activeSlide.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.22),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.2),_transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-7xl items-end px-4 pb-14 pt-20 sm:min-h-[100svh] sm:px-8 sm:pb-16 sm:pt-28 lg:items-center lg:pb-24">
        <div className="max-w-3xl rounded-[28px] bg-black/18 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-300 sm:mb-4 sm:text-sm sm:tracking-[0.45em]">
            {activeSlide.eyebrow}
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            {activeSlide.title}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-stone-200 sm:mt-5 sm:max-w-xl sm:text-base sm:leading-7">
            {activeSlide.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="#travels"
              className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-300 sm:w-auto"
            >
              Аяллууд үзэх
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Холбогдох
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-4 z-10 flex gap-2 sm:bottom-8 sm:left-8">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-2 rounded-full transition sm:h-2.5 ${
              slideIndex === index ? "w-8 bg-white sm:w-10" : "w-2 bg-white/45 sm:w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default VideoComponents;
