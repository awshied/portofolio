import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCards from "../components/GlowCards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div
        className="w-full h-full md:px-20 px-5"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <TitleHeader
          title="Pengalaman Freelance"
          sub="🎲 Ringkasan Praktik Nyata"
        />
        <div className="md:mt-32 mt-18 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCards card={card} index={index}>
                    <div>
                      <img
                        src={card.imgPath}
                        style={{
                          filter:
                            "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                        }}
                        alt={card.title}
                      />
                    </div>
                  </GlowCards>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          className="md:w-10 w-5"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold md:text-3xl text-xl">
                          {card.title}
                        </h1>
                        <p className="my-5 text-white-25">🗓️ {card.date}</p>
                        <p className="text-[#839cb5] italic">Tanggung Jawab</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-25">
                          {card.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="md:text-[17px] text-[15px]"
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
