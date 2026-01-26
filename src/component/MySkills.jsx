import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaGithub, FaRocket } from "react-icons/fa";
import { MdApi, MdDevices } from "react-icons/md";
import { SiVuedotjs, SiTailwindcss } from "react-icons/si";

const MySkills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-back",
      once: true
    });
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: <FaCss3 />, percentage: 90, color: "from-blue-500 to-indigo-500" },
    { name: "JavaScript", icon: <FaJsSquare />, percentage: 85, color: "from-yellow-500 to-amber-500" },
    { name: "React.js", icon: <FaReact />, percentage: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Vue.js", icon: <SiVuedotjs />, percentage: 80, color: "from-green-500 to-emerald-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 92, color: "from-teal-500 to-cyan-500" },
    { name: "Responsive Design", icon: <MdDevices />, percentage: 90, color: "from-purple-500 to-pink-500" },
    { name: "Git & GitHub", icon: <FaGithub />, percentage: 85, color: "from-gray-700 to-black" },
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Title with animation */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12"
          data-aos="zoom-out"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              data-aos-delay={index * 100}
              className="relative group overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Icon with animation */}
              <div 
                className="text-4xl mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 mx-auto transition-all duration-500"
                data-aos="zoom-out"
                data-aos-delay={index * 100 + 200}
              >
                <span className="text-cyan-400 group-hover:text-white transition-colors duration-500">
                  {skill.icon}
                </span>
              </div>

              {/* Skill name with animation */}
              <h3 
                className="text-xl font-semibold text-center text-white mb-4"
                data-aos="fade-down"
                data-aos-delay={index * 100 + 300}
              >
                {skill.name}
              </h3>

              {/* Progress bar with animation */}
              <div 
                className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 400}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.percentage}%` }}
                  data-aos="fade-right"
                  data-aos-delay={index * 100 + 500}
                ></div>
              </div>

              {/* Percentage with animation */}
              <p 
                className="text-right text-sm font-medium text-gray-300"
                data-aos="fade-left"
                data-aos-delay={index * 100 + 600}
              >
                {skill.percentage}% mastery
              </p>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;