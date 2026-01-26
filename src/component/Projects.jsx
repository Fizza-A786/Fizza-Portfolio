import { Fragment, useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../Images/p1.jpg";
import img2 from "../Images/p2.webp";
import img3 from "../Images/p3.jpg";
import img4 from "../Images/p4.jpg";
import img5 from "../Images/p5.jpg";
import img6 from "../Images/p6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true
    });
  }, []);

  const myProjects = [
    {
      pic: img1,
      title: "Car Rental App",
      link: "https://www.carrental.com",
      color: "from-cyan-500 to-blue-600"
    },
    {
      pic: img2,
      title: "Losail App",
      link: "https://www.losailapp.com",
      color: "from-purple-500 to-pink-600"
    },
    {
      pic: img3,
      title: "Face Detection",
      link: "https://www.facedetection.com",
      color: "from-amber-500 to-orange-600"
    },
    {
      pic: img4,
      title: "VPN App",
      link: "https://www.vpnapp.com",
      color: "from-emerald-500 to-teal-600"
    },
    {
      pic: img5,
      title: "Task Tracker",
      link: "https://www.tasktracker.com",
      color: "from-violet-500 to-indigo-600"
    },
    {
      pic: img6,
      title: "Quiz Quick",
      link: "https://www.quizquick.com",
      color: "from-rose-500 to-red-600"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const animations = [
    { 
      card: "flip-left",
      title: "fade-down",
      overlay: "zoom-in"
    },
    { 
      card: "flip-right",
      title: "fade-up",
      overlay: "zoom-in"
    },
    { 
      card: "flip-up",
      title: "fade-right",
      overlay: "zoom-in"
    },
    { 
      card: "flip-down",
      title: "fade-left",
      overlay: "zoom-in"
    },
    { 
      card: "zoom-in",
      title: "fade-down",
      overlay: "zoom-in"
    },
    { 
      card: "zoom-out",
      title: "fade-up",
      overlay: "zoom-in"
    }
  ];

  const selectAnimation = (index) => animations[index % animations.length];

  return (
    <Fragment>
      <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6">
          {/* Title with animation */}
          <div className="flex justify-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              My Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((item, index) => {
              const anim = selectAnimation(index);
              return (
                <div
                  key={index}
                  data-aos={anim.card}
                  data-aos-delay={index * 100}
                  className="relative group overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {/* Project Image */}
                  <div className="w-full h-60 overflow-hidden relative">
                    <img
                      src={item.pic}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    {hoveredProject === index && (
                      <div 
                        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${item.color} text-white transition-all duration-500`}
                        data-aos={anim.overlay}
                        data-aos-delay={index * 100 + 300}
                      >
                        <p className="flex items-center gap-2 text-xl font-semibold">
                          Live Preview <MdArrowOutward className="text-2xl animate-pulse" />
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h1 
                    className="text-white text-xl font-semibold p-4 text-center"
                    data-aos={anim.title}
                    data-aos-delay={index * 100 + 200}
                  >
                    {item.title}
                  </h1>

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;