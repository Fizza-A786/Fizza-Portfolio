import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaLaptopCode, FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true
    });
  }, []);

  const myServices = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      descrp: "Building responsive and interactive websites using HTML, CSS, and JavaScript to create engaging user experiences.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <FaCode />,
      title: "UI/UX Design",
      descrp: "Designing intuitive user interfaces and experiences for web applications, focusing on usability and aesthetics.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaServer />,
      title: "Frontend Framework Development",
      descrp: "Developing dynamic web apps using frameworks like React and Vue.js for scalable and maintainable code.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      descrp: "Seamlessly integrating RESTful APIs and third-party services to enhance web application functionality.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      descrp: "Ensuring websites are optimized for all devices, providing a consistent experience across desktops, tablets, and mobiles.",
      color: "from-violet-500 to-indigo-600"
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Web Deployment & Hosting",
      descrp: "Deploying websites to hosting platforms and managing performance, security, and updates for live applications.",
      color: "from-rose-500 to-red-600"
    }
  ];

  const animations = [
    { 
      card: "flip-left",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    },
    { 
      card: "flip-right",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    },
    { 
      card: "flip-up",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    },
    { 
      card: "flip-down",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    },
    { 
      card: "zoom-in",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    },
    { 
      card: "zoom-out",
      icon: "zoom-in",
      title: "fade-down",
      desc: "fade-up"
    }
  ];

  const selectAnimation = (index) => animations[index % animations.length];

  return (
    <Fragment>
      <section id="services" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
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
              My Services
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myServices.map((item, index) => {
              const anim = selectAnimation(index);
              return (
                <div
                  key={index}
                  data-aos={anim.card}
                  data-aos-delay={index * 100}
                  className="relative group overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {/* Icon with animation */}
                  <div 
                    className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 mx-auto mb-6 transition-all duration-500"
                    data-aos={anim.icon}
                    data-aos-delay={index * 100 + 200}
                  >
                    <span className="text-2xl text-cyan-400 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </span>
                  </div>

                  {/* Title with animation */}
                  <h1 
                    className="text-xl font-semibold text-center text-white mb-4"
                    data-aos={anim.title}
                    data-aos-delay={index * 100 + 300}
                  >
                    {item.title}
                  </h1>

                  {/* Description with animation */}
                  <p 
                    className="text-gray-300 text-center"
                    data-aos={anim.desc}
                    data-aos-delay={index * 100 + 400}
                  >
                    {item.descrp}
                  </p>

                  {/* Gradient overlay on hover */}
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

export default Services;