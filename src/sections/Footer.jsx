import React from "react";
import { socialImgs } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-container"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="flex flex-col justify-center lg:items-start items-center">
          <div className="flex items-center">
            <img
              src="/images/logo-aw.png"
              className="h-16 bg-blue-150"
              style={{
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />
            <figure style={{ boxShadow: "5px 5px 20px hsla(0, 0%, 0%, 0.8)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63439.54842584902!2d106.80157918526983!3d-6.397638560202235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb94dd3cde6b%3A0x136bba1bb1db0a01!2sKec.%20Sukmajaya%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1750760738308!5m2!1sid!2sid"
                style={{
                  border: 0,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  filter: "grayscale(1) invert(1)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-15 w-full"
              ></iframe>
            </figure>
          </div>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center lg:text-end sm:text-[15px] text-[14px]">
            © {new Date().getFullYear()}{" "}
            <span className="text-gold-100">Aryo Wibisono </span>| All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
