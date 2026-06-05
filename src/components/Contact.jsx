import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabase/supabaseClient";

const Contact = () => {
  const theme = {
    blueLight: "#60a5fa",
    bluePrimary: "#2563eb",
    blueDeep: "#1e3a8a",
    white: "#ffffff",
    black: "#111111",
    offWhite: "#f8fafc",
    textDark: "#0f172a",
    textMuted: "#475569",
    borderBlue: "rgba(96, 165, 250, 0.2)",
    borderBlueLight: "rgba(96, 165, 250, 0.12)",
    bgBlueTransparent: "rgba(37, 99, 235, 0.05)",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setSuccess(false);
    setErrorMessage("");

    try {
      setLoading(true);

      const { error } = await supabase
        .from("inquiries")
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            subject: "Website Contact Form",
            message: formData.message,
          },
        ]);

      if (error) {
        throw error;
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);

      setErrorMessage(
        error.message ||
          "Unable to send your message at the moment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 border-t"
      style={{
        backgroundColor: theme.offWhite,
        borderColor: theme.borderBlueLight,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: theme.bluePrimary }}
            >
              Get In Touch
            </p>

            <h3
              className="text-3xl font-semibold mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                color: theme.black,
              }}
            >
              Contact Us
            </h3>

            <div
              className="mb-6 h-[1px] w-12"
              style={{ backgroundColor: theme.blueLight }}
            />

            <p
              className="text-[1rem] leading-relaxed mb-8"
              style={{ color: theme.textMuted }}
            >
              Whether you have questions about our mission, want to invite us
              to serve in your parish, or wish to inquire about vocations — we
              welcome your message.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: `1px solid ${theme.borderBlue}`,
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                  >
                    <path
                      d="M3 5 L10 11 L17 5"
                      stroke={theme.bluePrimary}
                      strokeWidth="1.2"
                    />
                    <rect
                      x="2"
                      y="4"
                      width="16"
                      height="12"
                      rx="2"
                      stroke={theme.bluePrimary}
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>

                <span
                  className="text-[0.95rem]"
                  style={{ color: theme.textMuted }}
                >
                  info@smmmamerican.org
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: `1px solid ${theme.borderBlue}`,
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4"
                  >
                    <circle
                      cx="10"
                      cy="9"
                      r="4"
                      stroke={theme.bluePrimary}
                      strokeWidth="1.2"
                    />
                    <path
                      d="M3 17 C3 14, 17 14, 17 17"
                      stroke={theme.bluePrimary}
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>

                <span
                  className="text-[0.95rem]"
                  style={{ color: theme.textMuted }}
                >
                  SMMM American Region, USA
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <form
              onSubmit={handleFormSubmit}
              className="bg-white p-10 border shadow-sm rounded-sm"
              style={{
                borderColor: theme.borderBlueLight,
              }}
            >
              <p
                className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-6"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: theme.bluePrimary,
                }}
              >
                Send Us a Message
              </p>

              {success && (
                <div className="mb-4 p-3 rounded text-sm bg-green-100 text-green-700 border border-green-200">
                  Thank you. Your message has been received. We will respond as
                  soon as possible.
                </div>
              )}

              {errorMessage && (
                <div className="mb-4 p-3 rounded text-sm bg-red-100 text-red-700 border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderBlue,
                  }}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderBlue,
                  }}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm resize-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderBlue,
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 text-xs uppercase font-bold tracking-[0.15em] border transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    borderColor: theme.blueLight,
                    color: theme.white,
                    backgroundColor: theme.bluePrimary,
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;