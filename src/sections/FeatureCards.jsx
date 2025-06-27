import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";

const FeatureCards = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".card-feature");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });

      // Optional: fade in seluruh section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex justify-center px-4">
      <div className="w-full max-w-screen-xl bg-[#2f363d] rounded-xl shadow-[12px_8px_15px_rgba(0,0,0,0.6)] md:p-20 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {abilities.map(({ imgPath, title, desc }) => (
            <div
              key={title}
              className="card-feature relative bg-transparent border-2 border-gold-100 rounded-xl p-6 pt-10 shadow-[12px_8px_15px_rgba(0,0,0,0.6)]"
            >
              {/* Ikon melayang di luar border kiri atas */}
              <div className="absolute -top-6 -left-6 w-[56px] h-[56px] md:w-[67px] md:h-[67px] bg-blue-150 border-2 border-gold-100 rounded-full flex items-center justify-center z-10">
                <img
                  src={imgPath}
                  alt={title}
                  className="w-[27px] md:w-[35px]"
                />
              </div>

              {/* Konten dalam card */}
              <div className="pl-[10px]">
                <h3
                  className="text-gold-100 text-[14px] md:text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-white-25 text-[12px] md:text-[16px] leading-[20px] md:leading-[26px]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="text-white-25 mt-10 text-[11px] md:text-[15px] font-semibold italic"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Note : Gue Bukan <span className="text-gold-100">Hacker</span>
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
