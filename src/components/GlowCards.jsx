import React, { useRef } from "react";

const GlowCards = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  let animationFrame;

  const handleMouseMove = (index) => (e) => {
    if (animationFrame) cancelAnimationFrame(animationFrame);

    animationFrame = requestAnimationFrame(() => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      angle = (angle + 360) % 360;

      card.style.setProperty("--start", angle + 60);
    });
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card bg-blue-150 card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center justify-between gap-1 mb-5">
        <div className="hidden sm:flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <img src="/images/star.png" key={i} alt="star" className="size-5" />
          ))}
        </div>
        <div className="flex items-center md:gap-3 gap-2">
          <img src="/images/location.webp" className="w-3" />
          <p className="text-white-25 font-medium">{card.location}</p>
        </div>
      </div>
      <div className="mb-5">
        <p className="text-white-25 text-[16px]">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default React.memo(GlowCards);
