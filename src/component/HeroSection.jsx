import { Fragment, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import pic1 from "../Images/Fizza.png";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Add floating particles styles dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
        50% { opacity: 0.5; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
      }
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.05); opacity: 1; }
        100% { transform: scale(1); opacity: 0.7; }
      }
      .animate-float { animation: float 6s infinite ease-in-out; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const openSocial = (url) => {
    window.open(url);
  };

  return (
    <Fragment>
      <section
        id="home"
        className="relative overflow-hidden w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 "
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-15">
          {/* === Layout reversed on mobile === */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <h1
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                data-aos="fade-up"
              >
                <span className="block">Hi, I'm</span>
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Fizza Amjad
                </span>
              </h1>

              <div
                className="text-2xl text-white font-medium"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <Typewriter
                  words={[
                    "Frontend Web Developer",
                    "React Specialist",
                    "UI/UX Designer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>

              <p
                className="text-sx text-gray-300 leading-relaxed"
                data-aos="zoom-in-up"
                data-aos-delay="600"
              >
                I design modern, responsive websites with clean code, fluid animations & intuitive user experiences, delivering engaging digital solutions that merge creativity, performance, and seamless functionality.
              </p>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="800">
                <h3 className="text-gray-400 mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <FaFacebookF />,
                      color: "from-blue-600 to-blue-800",
                      url: "https://www.facebook.com/profile.php?id=61587268911541",
                    },
                    {
                      icon: <FaLinkedinIn />,
                      color: "from-cyan-600 to-blue-700",
                      url: "https://www.linkedin.com/in/fizza-amjad-377859381", // Updated placeholder
                    },
                    {
                      icon: <FaGithub />,
                      color: "from-purple-600 to-gray-900",
                      url: "https://github.com/Fizza-A786", // Updated placeholder
                    },
                  ].map((social, index) => (
                    <button
                      key={index}
                      onClick={() => openSocial(social.url)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${social.color} shadow-lg hover:scale-110 transition-transform duration-300`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image with Enhanced Animations */}
            <div
              className="w-full md:w-1/2 flex justify-center"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                {/* Floating particles background */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-cyan-400 opacity-20 animate-float"
                      style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Glowing gradient halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-lg opacity-0 group-hover:opacity-50 transition-all duration-700 scale-90 group-hover:scale-100" />

                {/* Main profile image */}
                <img
                  src={pic1}
                  alt="Fizza Amjad"
                  className="relative z-10 w-full h-full rounded-full object-cover border-4 border-transparent 
                  group-hover:border-cyan-400 transition-all duration-700 transform 
                  group-hover:scale-[1.03] group-hover:rotate-[5deg] shadow-xl 
                  group-hover:shadow-cyan-500/30"
                />

                {/* === Added Text Badges === */}
                <span className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg z-20">
                  Frontend Developer
                </span>
                <span className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg z-20">
                  Web Designer
                </span>

                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/30 transition-all duration-1000 scale-95 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-400/40 transition-all duration-700 scale-90 group-hover:scale-100 delay-75" />

                {/* Floating dots animation */}
                <div className="absolute -inset-4 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-cyan-400 animate-float"
                      style={{
                        width: "6px",
                        height: "6px",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 5 + 5}s`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;