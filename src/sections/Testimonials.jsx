import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCards from "../components/GlowCards";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div
        className="w-full h-full md:px-10 px-5"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <TitleHeader
          title="Pendapat Dari Klien"
          sub="⭐ Sorotan Beberapa Feedback"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(
            ({ imgPath, name, mentions, review, location, index }) => (
              <GlowCards key={index} card={{ review, location }}>
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={imgPath}
                      alt={name}
                      style={{
                        filter: "drop-shadow(8px 5px 6px hsla(0, 0%, 0%, 0.8))",
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-white-25">{mentions}</p>
                  </div>
                </div>
              </GlowCards>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
