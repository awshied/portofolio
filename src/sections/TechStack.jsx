import React from "react";
import TitleHeader from "../components/TitleHeader";
import {
  techStackIcons,
  // techStackImgs
} from "../constants";
import TechIcon from "../components/models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          once: true,
        },
      }
    );
  });

  return (
    <section
      id="skills"
      className="hidden lg:flex justify-center items-center section-padding"
    >
      <div
        className="w-full h-full md:px-10 px-5"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <TitleHeader
          title="Tech Stack Favorit"
          sub="💲 Kemampuan yang Ditawarkan"
        />

        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card bg-blue-150 overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>

                <div className="padding-x w-full">
                  <p className="pb-10">{icon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card bg-blue-150 overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
