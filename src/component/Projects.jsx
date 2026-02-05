import { Fragment, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../Images/carrent.jpg";
import img2 from "../Images/charity.jpeg";
import img3 from "../Images/service.png";
import img4 from "../Images/lawyer.jpg";
import img5 from "../Images/lundary.jpg";
import img6 from "../Images/book.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  // Wapis wahi original colors jo aapne diye thay (Pure Pink themes)
  const myProjects = [
    {
      pic: img1,
      title: "Car Rental",
      link: "https://car-rental-yellow.vercel.app/",
      color: "from-pink-500 to-pink-600" 
    },
    {
      pic: img2,
      title: "Charity Blush",
      link: "https://charity-blush-psi.vercel.app/",
      color: "from-pink-400 to-pink-500"
    },
    {
      pic: img3,
      title: "It Services",
      link: "https://it-service-red.vercel.app/",
      color: "from-pink-600 to-pink-700"
    },
    {
      pic: img4,
      title: "Lawyer",
      link: "https://lawyer-pi-three.vercel.app/",
      color: "from-pink-500 to-pink-600"
    },
    {
      pic: img5,
      title: "Laundry",
      link: "https://lundary.vercel.app/",
      color: "from-pink-400 to-pink-500"
    },
    {
      pic: img6,
      title: "Book-cover-design",
      link: "https://book-cover-design.vercel.app/",
      color: "from-pink-600 to-pink-700"
    }
  ];

  return (
    <Fragment>
      <section id="projects" className="relative py-24 bg-black overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-16 text-center">
             <h1 
              className="text-4xl p-2 md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              My Projects
            </h1>
               </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {myProjects.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.pic}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                      {item.title}
                    </h2>
                    <div className="w-10 h-1 bg-pink-500 rounded-full transition-all duration-500 group-hover:w-full opacity-80" />
                  </div>

                  {/* Hidden Overlay Content - removed extra text for smaller height */}
                  <div className="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-500 flex items-center mt-1">
                    <p className="text-xs text-pink-200 font-medium">Click to view details</p>
                  </div>
                </div>

                {/* Hover Interaction Overlay (Using Original Colors) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center z-30`}>
                  <button className="transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white text-pink-600 px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl hover:bg-pink-50 hover:scale-105 active:scale-95 text-sm">
                    View Project <MdArrowOutward />
                  </button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;