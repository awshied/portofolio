import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* KIRI */}
          <div className="flex flex-col gap-6 xl:w-[60%]">
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img src="/images/Proyek1.webp" alt="RentState" />
              </div>
              <div className="text-content">
                <h2
                  className="text-[16px] lg:text-[20px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">RentState</span> - Layanan
                  Pencarian Rute Tercepat dan Reservasi Penginapan di Kota Depok
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[15px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Dibangun dengan TypeScript, Next.js, Express.js, PostgreSQL,
                  Tailwind CSS, dan AWS Cognito untuk performa cepat serta ramah
                  pengguna.
                </p>
                <div className="items-center justify-center lg:justify-start flex w-full gap-2 lg:gap-3">
                  <img
                    src="/images/Typescript.webp"
                    className="p-2.5 h-auto w-11 lg:w-12"
                    alt="typescript"
                  />
                  <img
                    src="/images/Nextjs.webp"
                    className="p-1 h-auto w-11 lg:w-12"
                    alt="nextjs"
                  />
                  <img
                    src="/images/Expressjs.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="expressjs"
                  />
                  <img
                    src="/images/Postgres.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="postgresql"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Aws.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="aws"
                  />
                </div>
              </div>
            </div>
            <div className="first-project-wrapper" ref={project4Ref}>
              <div className="image-wrapper">
                <img src="/images/Proyek4.webp" alt="GlacioCore" />
              </div>
              <div className="text-content">
                <h2
                  className="text-[16px] lg:text-[20px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">GlacioCore</span> - Layanan
                  toko online berbasis cross-platform (Desktop & Mobile)
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[15px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Dibangun dengan JavaScript, React-Native, Express.js, MongoDB,
                  Tailwind CSS, dan Expo dengan tampilan modern dan engaging
                  bagi semua kalangan pengguna.
                </p>
                <div className="items-center justify-center lg:justify-start flex w-full gap-2 lg:gap-3">
                  <img
                    src="/images/Javascript.webp"
                    className="p-2.5 h-auto w-11 lg:w-12"
                    alt="javascript"
                  />
                  <img
                    src="/images/Reactjs.webp"
                    className="p-2 h-auto w-11"
                    alt="react-native"
                  />
                  <img
                    src="/images/Expressjs.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="expressjs"
                  />
                  <img
                    src="/images/Mongodb.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="mongodb"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Expo.webp"
                    className="p-2 h-auto w-11 lg:w-12"
                    alt="expo"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* KANAN */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-blue-200">
                <img
                  src="/images/Proyek2.webp"
                  alt="Adinda Fotocopy Management"
                />
              </div>
              <div className="gap-2 flex flex-col">
                <h2
                  className="text-[16px] lg:text-[18px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">Fotokopi</span> - Platform
                  Manajemen Alat Tulis Kantor
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[12px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Menggabungkan JavaScript, React.js, Express.js, NoSQL,
                  Tailwind CSS, dan Auth.js untuk kinerja optimal serta
                  antarmuka yang efisien.
                </p>

                <div className="items-center justify-center lg:justify-start flex w-full gap-2">
                  <img
                    src="/images/Javascript.webp"
                    className="p-2.5 h-auto w-11"
                    alt="javascript"
                  />
                  <img
                    src="/images/Reactjs.webp"
                    className="p-2 h-auto w-11"
                    alt="reactjs"
                  />
                  <img
                    src="/images/Expressjs.webp"
                    className="p-2 h-auto w-11"
                    alt="expressjs"
                  />
                  <img
                    src="/images/Mongodb.webp"
                    className="p-2 h-auto w-11"
                    alt="nosql"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Authjs.webp"
                    className="p-2 h-auto w-11"
                    alt="authjs"
                  />
                </div>
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-blue-200">
                <img src="/images/Proyek3.webp" alt="HCI Learning Center" />
              </div>
              <div className="gap-2 flex flex-col">
                <h2
                  className="text-[16px] lg:text-[18px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">HCI</span> - Platform
                  Pembelajaran Interaksi Manusia dan Komputer
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[12px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Website lintas platform yang responsif dengan teknologi PHP,
                  JQuery, Laravel, MySQL, Tailwind CSS, dan Bootstrap.
                </p>

                <div className="items-center justify-center lg:justify-start flex w-full gap-2">
                  <img
                    src="/images/Php.webp"
                    className="p-1.5 h-auto w-11"
                    alt="php"
                  />
                  <img
                    src="/images/Jquery.webp"
                    className="lg:p-1 p-1.5 h-auto w-11 lg:w-12"
                    alt="jquery"
                  />
                  <img
                    src="/images/Laravel.webp"
                    className="p-2 h-auto w-11"
                    alt="laravel"
                  />
                  <img
                    src="/images/Mysql.webp"
                    className="p-1.5 h-auto w-11"
                    alt="mysql"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Bootstrap.webp"
                    className="p-2 h-auto w-11"
                    alt="bootstrap"
                  />
                </div>
              </div>
            </div>
            <div className="project" ref={project5Ref}>
              <div className="image-wrapper bg-blue-200">
                <img src="/images/Proyek5.webp" alt="AI Sales Page Generator" />
              </div>
              <div className="gap-2 flex flex-col">
                <h2
                  className="text-[16px] lg:text-[18px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">AI Gen</span> - Platform
                  Generative Halaman Penjualan Berbasis Artificial Intelligence
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[12px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Menggabungkan teknologi TypeScript, Next.js, Gemini AI,
                  MongoDB, Tailwind CSS, dan Auth.js untuk kinerja optimal serta
                  user interface yang efektif.
                </p>

                <div className="items-center justify-center lg:justify-start flex w-full gap-2">
                  <img
                    src="/images/Typescript.webp"
                    className="p-1.5 h-auto w-11"
                    alt="typescript"
                  />
                  <img
                    src="/images/Nextjs.webp"
                    className="lg:p-1 p-1.5 h-auto w-11 lg:w-12"
                    alt="nextjs"
                  />
                  <img
                    src="/images/Gemini.webp"
                    className="p-2 h-auto w-11"
                    alt="gemini"
                  />
                  <img
                    src="/images/Mongodb.webp"
                    className="p-1.5 h-auto w-11"
                    alt="mongodb"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Authjs.webp"
                    className="p-2 h-auto w-11"
                    alt="authjs"
                  />
                </div>
              </div>
            </div>
            <div className="project" ref={project6Ref}>
              <div className="image-wrapper bg-blue-200">
                <img src="/images/Proyek6.webp" alt="Mang TekTek" />
              </div>
              <div className="gap-2 flex flex-col">
                <h2
                  className="text-[16px] lg:text-[18px] font-semibold"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    wordSpacing: 2,
                  }}
                >
                  <span className="text-gold-100">Mang TekTek</span> - Platform
                  Warung Makan Digital
                </h2>
                <p
                  className="text-white-25 text-[14px] lg:text-[12px]"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 500,
                  }}
                >
                  Website lintas platform yang responsif dengan tech-stack
                  JavaScript, React.js, Express.js, MongoDB, Tailwind CSS, dan
                  Stripe.
                </p>

                <div className="items-center justify-center lg:justify-start flex w-full gap-2">
                  <img
                    src="/images/Javascript.webp"
                    className="p-1.5 h-auto w-11"
                    alt="javascript"
                  />
                  <img
                    src="/images/Reactjs.webp"
                    className="p-2 h-auto w-11"
                    alt="reactjs"
                  />
                  <img
                    src="/images/Expressjs.webp"
                    className="p-2 h-auto w-11"
                    alt="expressjs"
                  />
                  <img
                    src="/images/Mongodb.webp"
                    className="p-1.5 h-auto w-11"
                    alt="mongodb"
                  />
                  <img
                    src="/images/Tailwindcss.webp"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                  />
                  <img
                    src="/images/Stripe.webp"
                    className="p-2 h-auto w-11"
                    alt="stripe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
