import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  const contactItems = [
    {
      icon: <MdLocationPin />,
      text: "Bahawalpur, Punjab, Pakistan",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      text: "fizzaamjad813@gmail.com",
      color: "from-pink-400 to-pink-500",
      href: "mailto:fizzaamjad813@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: "+92 326 056 9202",
      color: "from-pink-600 to-pink-700",
      href: "tel:+923260569202",
    },
    {
      icon: <CgWebsite />,
      text: "fizzaamjad.com",
      color: "from-pink-500 to-pink-600",
      href: "https://fizzaamjad.com",
      target: "_blank",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-400 to-pink-600 mb-14"
          data-aos="fade-down"
        >
          Get In Touch
        </h1>

        {/* Main Wrapper */}
        <div
          className="flex flex-col lg:flex-row 
          bg-black/60 backdrop-blur-md 
          rounded-3xl border border-gray-700 
          shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
          overflow-hidden max-w-6xl mx-auto"
        >
          {/* Form Section */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 p-6 sm:p-7 md:p-8 space-y-5"
            data-aos="fade-right"
          >
            {["name", "email", "phone"].map((field, i) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                      ? "tel"
                      : "text"
                }
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)
                  }`}
                className="w-full px-4 py-3 rounded-xl 
                bg-gray-700/40 border border-gray-600 
                text-white placeholder-gray-400 
                focus:ring-2 focus:ring-pink-500 
                focus:border-pink-500 
                transition-all duration-300"
                required
              />
            ))}

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl 
              bg-gray-700/40 border border-gray-600 
              text-white placeholder-gray-400 
              focus:ring-2 focus:ring-pink-500 
              focus:border-pink-500 
              transition-all duration-300"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 
              bg-gradient-to-r from-pink-500 to-pink-600 
              hover:from-pink-600 hover:to-pink-700 
              text-white font-semibold py-3 rounded-xl 
              transition-all duration-300 
              hover:shadow-[0_10px_25px_rgba(236,72,153,0.4)]"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </button>
          </form>

          {/* Contact Info Section */}
          <div
            className="flex-1 p-6 sm:p-7 md:p-8 
            bg-gray-800/20 border-t lg:border-t-0 lg:border-l border-gray-700
            flex flex-col justify-center"
            data-aos="fade-left"
          >
            <div className="grid gap-5">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-5 rounded-2xl 
                  bg-gradient-to-br from-gray-700/30 to-gray-800/40
                  border border-gray-600/40
                  transition-all duration-300 
                  hover:-translate-y-1 
                  hover:border-pink-400/40
                  hover:shadow-[0_8px_28px_rgba(236,72,153,0.18)]"
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 flex items-center justify-center 
                    rounded-2xl bg-gradient-to-br ${item.color}
                    transition-transform duration-300 group-hover:scale-105`}
                  >
                    <span className="text-lg text-white">
                      {item.icon}
                    </span>
                  </div>

                  {/* Text */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      className="text-base font-medium text-gray-200 
                      group-hover:text-pink-400 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p
                      className="text-base font-medium text-gray-200 
                      group-hover:text-pink-400 transition-colors duration-300"
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default ContactUs;
