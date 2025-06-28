import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.log("EmailJS tidak berfungsi,", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding relative">
      {showSuccess && (
        <div className="fixed bottom-5 left-5 lg:text-[16px] text-[12px] bg-blue-150 text-gold-100 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          ✅ Oke, pesan lu baru aja dikirim
        </div>
      )}
      <div
        className="w-full h-full md:px-10 px-5"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <TitleHeader
          title="Ayo Terhubung!"
          sub="☎️ Ingin Mengajukan Pertanyaan?"
        />

        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-2 md:p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                ref={formRef}
              >
                <div>
                  <label htmlFor="name">Nama</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tulis nama lu!"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Alamat email lu apaan?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Tulis Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Apa yang sekiranya bisa gue bantu?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text font-medium">
                      {loading ? "Mengirim..." : "Kirim Pesan"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.png" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block xl:col-span-7 min-h-96">
            <div className="bg-gold-100 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
