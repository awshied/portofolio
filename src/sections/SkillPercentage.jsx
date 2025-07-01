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
        <div className="flex justify-between items-center text-xs sm:text-sm mb-3">
          <span className="flex items-center gap-3">
            <img
              src={label}
              alt="icon"
              className="h-4 w-4 sm:h-7 sm:w-7 object-contain"
            />
            <span className="text-white-25 truncate md:text-[16px] text-[10px]">
              {name}
            </span>
          </span>
          <span className="md:text-[16px] text-[10px]">{value}%</span>
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
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skill-section",
          start: "top 80%",
          once: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert(); // membersihkan animasi saat unmount
  }, []);

  return (
    <section className="flex-center lg:px-10 md:mt-40 mt-20 skill-section">
      <div
        className="w-full h-full lg:px-10"
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
                  className="w-full flex flex-col lg:flex-row items-center justify-center sm:gap-2 md:gap-4 lg:gap-10 p-3 lg:p-1"
                >
                  {/* Chart */}
                  <div className="w-full flex flex-col gap-6 justify-center items-center">
                    <SkillStatistic roleData={percentage} />
                  </div>

                  {/* Deskripsi dan bar */}
                  <div className="w-full px-4 md:px-8 flex flex-col">
                    <div className="flex items-center gap-4 sm:gap-5 my-4 sm:my-6">
                      <img
                        src={percentage.iconPath}
                        alt="role icon"
                        className="w-8 sm:w-10 md:w-12"
                      />
                      <h2 className="text-[21px] sm:text-3xl font-bold">
                        {percentage.role}
                      </h2>
                    </div>
                    <hr className="mb-4 border-purple-400" />

                    <div className="flex items-center justify-between text-sm text-white-25 mb-6">
                      <span>Overall : ⭐ {percentage.overall} / 10</span>
                      <span>Status : {percentage.status}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-6">
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
          <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-6 md:mt-6 lg:mt-2">
            {percentages.map((percentage, index) => (
              <button
                key={percentage.id}
                onClick={() => swiperRef.current?.slideTo(index)}
                className="group flex flex-col items-center cursor-pointer"
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
                    className="w-full h-full p-1 object-cover"
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
