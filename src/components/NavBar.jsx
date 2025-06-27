import { useEffect, useState, useRef } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay blocked: ", err);
          });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <audio ref={audioRef} src="/sounds/bgm.mp3" loop preload="auto" />

      <div className="inner">
        <a className="logo" href="#hero">
          <img
            src="/images/awlogo.png"
            className="h-auto w-8 md:w-10"
            style={{
              filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
            }}
          />
          <small
            className="text-white text-[20px] md:text-[26px] font-semibold"
            style={{ fontFamily: "var(--font-lobster)" }}
          >
            Aryo Wibisono
          </small>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2 items-center">
          <button
            onClick={toggleAudio}
            className="flex cursor-pointer hover:opacity-80"
          >
            <img
              src={isPlaying ? "/images/music.png" : "/images/no-music.png"}
              alt="music icon"
              className={`${
                isPlaying ? "p-1.5 md:p-2" : "p-1 opacity-70"
              } md:w-8 w-6 h-auto transition object-contain border-1 border-white`}
              style={{ borderRadius: "6px 0 6px 0" }}
            />
          </button>
          <a href="#contact" className="flex cursor-pointer hover:opacity-80">
            <img
              src="/images/contact-us.png"
              alt="contact icon"
              className="p-1.5 md:w-8 w-6 h-auto transition object-contain border-1 border-white"
              style={{ borderRadius: "6px 0 6px 0" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
