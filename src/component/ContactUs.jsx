import { Fragment, useRef, useEffect } from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  const contactItems = [
    {
      icon: <MdLocationPin />,
      text: "Hasalpur, Punjab, Pakistan",
      color: "from-red-500 to-pink-600",
      animation: "scale-110"
    },
    {
      icon: <MdOutlineAlternateEmail />,
      text: "fizzaamjad813@gmail.com",
      color: "from-blue-500 to-cyan-600",
      animation: "rotate-12",
      href: "fizzaamjad813@gmail.com"
    },
    {
      icon: <FaPhoneAlt />,
      text: "+92 3260569202",
      color: "from-green-500 to-emerald-600",
      animation: "translate-y-1",
      href: "tel:+923260569202"
    },
    {
      icon: <CgWebsite />,
      text: "Fizzaamjad.com",
      color: "from-purple-500 to-violet-600",
      animation: "rotate-[360deg]",
      href: "https://fizzaamjad.com",
      target: "_blank"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12" data-aos="fade-down">
          Get In Touch
        </h1>

        <div className="flex flex-col lg:flex-row bg-gray-800/50 rounded-xl border border-gray-700 shadow-2xl overflow-hidden max-w-6xl mx-auto">
          {/* Form Section */}
          <form ref={form} onSubmit={sendEmail} className="flex-1 p-5 md:p-10 space-y-6" data-aos="fade-right">
            {['name', 'email', 'phone'].map((field, i) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full px-5 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-500 transition-all"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-cyan-500 transition-all"
              data-aos="fade-up"
              data-aos-delay="250"
              required
            />
            <button 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 p-8 md:p-10 bg-gray-700/20 border-t lg:border-t-0 lg:border-l border-gray-700" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500" data-aos="flip-down">
              Contact Us
            </h2>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group" data-aos="fade-up" data-aos-delay={150 + i * 50}>
                  <div className={`p-2 bg-gradient-to-br ${item.color} rounded-full relative overflow-hidden`}>
                    <div className={`text-2xl text-white relative z-10 transform group-hover:${item.animation} transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.target} className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.text}</p>
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