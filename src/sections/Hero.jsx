import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import TypingEffect from "../components/TypingEffect";
import { words } from "../constants";

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
    let typingSpeed = 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout flex flex-col lg:flex-row items-center justify-between lg:gap-10">
        {/* Kiri */}
        <header className="flex flex-col justify-center w-full lg:w-1/2 px-5">
          <div className="flex flex-col gap-7">
            <div
              className="hero-text lg:gap-5 gap-2"
              style={{
                textShadow: "10px 10px 5px hsla(0, 0%, 0%, 0.6)",
              }}
            >
              <h1 className="text-[26px] md:text-[40px] lg:text-[40px] break-words max-w-full leading-tight">
                Mengolah
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex flex-wrap items-center gap-3 pb-2 max-w-full break-words"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="w-6 h-6 md:w-10 md:h-10 object-contain"
                        />
                        <span className="text-gold-100 break-words my-1 md:my-0.5 lg:my-1.5">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-[26px] md:text-[40px] lg:text-[40px]">
                Menjadi Solusi yang
              </h1>
              <h1 className="text-[26px] md:text-[40px] lg:text-[40px]">
                Fungsional
              </h1>
            </div>
            <div className="basic">
              <button
                onClick={handleMicClick}
                className="flex rounded-full bg-blue-150 items-center justify-center size-9 md:size-13 lg:size-16 hover:scale-90 transition-transform duration-300 z-20 cursor-pointer"
                style={{ boxShadow: "5px 5px 20px hsla(0, 0%, 0%, 0.8)" }}
              >
                <div className="flex items-center justify-center border-2 border-gold-100 bg-transparent rounded-full size-8 md:size-11 lg:size-13">
                  <img src="/images/mic.png" />
                </div>
              </button>
              <audio ref={audioRef} src="/sounds/myrecord.mp3" preload="auto" />
              <div className="separator"></div>
              <small
                className="text-white text-lg md:text-2xl lg:text-3xl py-2 font-semibold"
                style={{
                  fontFamily: "var(--font-poppins)",
                  textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)",
                }}
              >
                {displayedText}
              </small>
            </div>
            <p
              className="text-white-25 text-xs md:text-base lg:text-lg relative z-10 pointer-events-none"
              style={{ textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)" }}
            >
              <TypingEffect
                parts={[
                  `"Hidup itu pada dasarnya sangat sederhana... cukup bernapas, makan, dan tidur... lalu mengulanginya secara `,
                  <span className="text-gold-100">profesional</span>,
                  ` dengan elegansi yang tenang."`,
                ]}
                speed={50}
                delay={5000}
              />
            </p>
            <p
              className="text-white md:text-[16px] text-[13px] relative z-10 pointer-events-none"
              style={{ textShadow: "10px 10px 5px hsla(0, 0%, 0%, 1)" }}
            >
              ~ Kata Gue
            </p>
          </div>
        </header>
        {/* Kanan */}
        <figure className="w-full lg:w-1/2 flex justify-center items-center lg:translate-y-none">
          <img
            src="/images/Minion.png"
            alt="Hero Minion"
            loading="lazy"
            className="object-contain w-[400px] md:w-[600px] lg:w-[450px]"
          />
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
