import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import TypingEffect from "../components/TypingEffect";
import { variables, words } from "../constants";

const Hero = () => {
  const audioRef = useRef(null);
  const texts = [
    "Front-End Beginner",
    "Back-End Beginner",
    "Junior Programmer",
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMicClick = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    const currentText = texts[textIndex];

    let typingSpeed = isDeleting ? 100 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Kiri */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div
              className="hero-text lg:gap-0 gap-2"
              style={{
                textShadow: "10px 10px 5px hsla(0, 0%, 0%, 0.6)",
              }}
            >
              <h1 className="text-[27px] md:text-[60px]">
                Mengolah
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-18 md:size-15 size-12 md:p-2 p-1"
                        />
                        <span className="text-gold-100">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-[27px] md:text-[60px]">
                Menjadi Solusi yang
              </h1>
              <h1 className="text-[27px] md:text-[60px]">
                <span className="slide px-0 my-2">
                  <span className="wrapper">
                    {variables.map((variable) => (
                      <span key={variable.text}>
                        <span className="text-gold-100">{variable.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>
            <div className="basic">
              <button
                onClick={handleMicClick}
                className="flex rounded-full bg-blue-150 items-center justify-center size-10 md:size-14 md:translate-y-1 hover:scale-90 transition-transform duration-300 z-20 cursor-pointer"
                style={{ boxShadow: "5px 5px 20px hsla(0, 0%, 0%, 0.8)" }}
              >
                <div className="flex items-center justify-center border-2 border-gold-100 bg-transparent rounded-full size-10 md:size-11">
                  <img src="/images/mic.png" />
                </div>
              </button>
              <audio ref={audioRef} src="/sounds/myrecord.mp3" preload="auto" />
              <div className="separator"></div>
              <small
                className="text-white lg:text-[30px] md:text-[24px] text-[12px] py-2 md:py-0 font-semibold"
                style={{
                  fontFamily: "var(--font-poppins)",
                  textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)",
                  letterSpacing: 1,
                  wordSpacing: 2,
                }}
              >
                {displayedText}
              </small>
            </div>
            <p
              className="text-white-25 md:text-[16px] text-[12px] lg:mr-130 relative z-10 pointer-events-none"
              style={{ textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)" }}
            >
              <TypingEffect
                parts={[
                  `"Hidup itu pada dasarnya sangat sederhana... cukup bernapas, makan, dan tidur... lalu mengulanginya secara `,
                  <span className="text-gold-100">profesional</span>,
                  ` dengan elegansi yang tenang."`,
                ]}
              />
            </p>
            <p
              className="text-white md:text-[16px] text-[13px] lg:mr-130 relative z-10 pointer-events-none"
              style={{ textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)" }}
            >
              ~ Kata Gue
            </p>
            <Button
              className="lg:w-80 lg:h-16 w-60 h-12"
              id="button"
              text="Proyek Gue"
            />
          </div>
        </header>
        {/* Kanan */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
