import { Fragment, useEffect } from "react";
import pic1 from "../Images/Fizza.png";
import resume from "../Images/Fizza.resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out-quad',
      once: true
    });

    // Add custom animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      .floating-img {
        animation: float 6s ease-in-out infinite;
      }
      .glow-shadow {
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Fizza Amjad.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <section id="about" className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image with Enhanced Animations */}
            <div 
              className="w-full lg:w-2/5 flex justify-center"
              data-aos="zoom-out-up"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                {/* Glowing gradient halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-lg opacity-0 group-hover:opacity-40 transition-all duration-700" />

                {/* Main profile image */}
                <img
                  src={pic1}
                  alt="Fizza Amjad"
                  className="relative z-10 w-full h-full rounded-full object-cover border-4 border-cyan-400/30 
                  group-hover:border-cyan-400 transition-all duration-500 floating-img
                  group-hover:glow-shadow"
                />

                {/* Floating dots animation */}
                <div className="absolute -inset-4 overflow-hidden rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-cyan-400"
                      style={{
                        width: '8px',
                        height: '8px',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 3 + 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="w-full lg:w-3/5 space-y-6">
              <h1 
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                data-aos="zoom-out-up"
                data-aos-delay="100"
              >
                About Me
              </h1>

              <p 
                className="text-lg text-gray-300 leading-relaxed"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                Hi, I'm Fizza Amjad, a passionate Frontend Developer specializing in crafting responsive and interactive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React, I transform ideas into sleek, user-centric digital experiences. I focus on writing clean, maintainable code, delivering smooth UI/UX, and building scalable web architectures. Let's build something exceptional together!
              </p>

              <div 
                className="pt-4"
                data-aos="zoom-out-up"
                data-aos-delay="300"
              >
                <button
                  onClick={handleDownload}
                  className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium
                  hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:to-cyan-500 before:opacity-0 
                  before:hover:opacity-100 before:transition-opacity before:duration-500 before:rounded-full"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating background elements */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
      </section>
    </Fragment>
  );
};

export default AboutMe;