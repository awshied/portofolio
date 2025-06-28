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

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
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
          duration: 0.5,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            once: true,
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* KIRI */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div
              className="image-wrapper"
              style={{ boxShadow: "5px 5px 20px hsla(0, 0%, 0%, 0.8)" }}
            >
              <img src="/images/Proyek1.png" alt="RentState" />
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
                  src="/images/Typescript.png"
                  className="p-2.5 h-auto w-11 lg:w-12"
                  alt="typescript"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
                <img
                  src="/images/Nextjs.svg"
                  className="p-1 h-auto w-11 lg:w-12"
                  alt="nextjs"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
                <img
                  src="/images/Express.svg"
                  className="p-2 h-auto w-11 lg:w-12"
                  alt="expressjs"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
                <img
                  src="/images/Postgre.svg"
                  className="p-2 h-auto w-11 lg:w-12"
                  alt="postgresql"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
                <img
                  src="/images/Tailwindcss.svg"
                  className="p-2 h-auto w-11 lg:w-12"
                  alt="tailwindcss"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
                <img
                  src="/images/aws.svg"
                  className="p-2 h-auto w-11 lg:w-12"
                  alt="aws"
                  style={{
                    filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                  }}
                />
              </div>
            </div>
          </div>

          {/* KANAN */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-blue-200">
                <img
                  src="/images/Proyek2.png"
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
                  Menggabungkan JavaScript, Vue.js, Express.js, NoSQL, Tailwind
                  CSS, dan Auth.js untuk kinerja optimal serta antarmuka yang
                  efisien.
                </p>

                <div className="items-center justify-center lg:justify-start flex w-full gap-2">
                  <img
                    src="/images/Javascript.png"
                    className="p-2.5 h-auto w-11"
                    alt="javascript"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Vue.png"
                    className="p-2 h-auto w-11"
                    alt="vuejs"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Express.svg"
                    className="p-2 h-auto w-11"
                    alt="expressjs"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Mongodb.png"
                    className="p-2 h-auto w-11"
                    alt="nosql"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Tailwindcss.svg"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Auth.svg"
                    className="p-2 h-auto w-11"
                    alt="authjs"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-blue-200">
                <img src="/images/Proyek3.png" alt="HCI Learning Center" />
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
                    src="/images/Php.png"
                    className="p-1.5 h-auto w-11"
                    alt="php"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Jquery.png"
                    className="lg:p-1 p-1.5 h-auto w-11 lg:w-12"
                    alt="jquery"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Laravel.svg"
                    className="p-2 h-auto w-11"
                    alt="laravel"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Mysql.svg"
                    className="p-1.5 h-auto w-11"
                    alt="mysql"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Tailwindcss.svg"
                    className="p-2 h-auto w-11"
                    alt="tailwindcss"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
                  />
                  <img
                    src="/images/Bootstrap.png"
                    className="p-2 h-auto w-11"
                    alt="bootstrap"
                    style={{
                      filter: "drop-shadow(10px 8px 3px hsla(0, 0%, 0%, 1))",
                    }}
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
