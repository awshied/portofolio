import React, { useRef, useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import { percentages } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SkillStatistic from "../components/SkillStatistic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillPercentage = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const StatBar = ({ label, name, value }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center text-xs sm:text-sm mb-2 sm:mb-3">
          <span className="flex items-center gap-3">
            <img
              src={label}
              alt="icon"
              className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
            />
            <span className="text-white-25 truncate">{name}</span>
          </span>
          <span>{value}%</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    );
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-section",
          start: "top 80%", // mulai saat 80% dari viewport
          toggleActions: "play none none reverse", // animasi hanya saat masuk
        },
      });
    });

    return () => ctx.revert(); // membersihkan animasi saat unmount
  }, []);

  return (
    <section className="flex-center section-padding skill-section">
      <div
        className="w-full h-full px-4 sm:px-6 md:px-10"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <TitleHeader
          title="Persentase Kemampuan"
          sub="🛠️ Nilai Kemampuan Individu"
        />

        <div className="relative mx-auto mt-10 sm:mt-14 md:mt-16">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="object-swiper"
          >
            {percentages.map((percentage) => (
              <SwiperSlide key={percentage.id}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 lg:p-8"
                >
                  {/* Chart */}
                  <div className="w-full max-w-md flex justify-center items-center">
                    <SkillStatistic roleData={percentage} />
                  </div>

                  {/* Deskripsi dan bar */}
                  <div className="w-full">
                    <div className="flex items-center gap-4 sm:gap-5 my-4 sm:my-6">
                      <img
                        src={percentage.iconPath}
                        alt="role icon"
                        className="w-8 sm:w-10 md:w-12"
                      />
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {percentage.role}
                      </h2>
                    </div>
                    <hr className="mb-4 border-purple-400" />

                    <div className="flex items-center justify-between text-xs sm:text-sm text-white-25 mb-4">
                      <span>Overall : ⭐ {percentage.overall} / 10</span>
                      <span>Status : {percentage.status}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {percentage.languagePercentage.map((lang, index) => (
                        <StatBar
                          key={index}
                          label={lang.languageImg}
                          name={lang.name}
                          value={lang.statsBar}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigasi icon di bawah */}
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-4 md:gap-6 mt-6">
            {percentages.map((percentage, index) => (
              <button
                key={percentage.id}
                onClick={() => swiperRef.current?.slideTo(index)}
                className="group flex flex-col items-center"
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-2 ring-purple-400 scale-110"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={percentage.iconPath}
                    alt={percentage.id}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`hidden sm:block sm:text-xs mt-1 sm:mt-2 text-center ${
                    activeIndex === index
                      ? "text-purple-400 font-medium"
                      : "text-white-25"
                  }`}
                >
                  {percentage.role}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPercentage;
