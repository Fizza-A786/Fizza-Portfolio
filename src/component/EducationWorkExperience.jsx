import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationWorkExperience = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }, []);

  return (
    <Fragment>
      <section id="resume" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6">
          {/* Title with animation */}
          <h1 
            className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12"
            data-aos="flip-down"
          >
            Education & Work Experience
          </h1>

          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16">
            {/* Education Section */}
            <div 
              className="flex-1 max-w-2xl"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h1 className="text-3xl font-semibold text-white">Education</h1>
              </div>

              {/* Education Timeline */}
              <div className="relative pl-12 border-l-2 border-cyan-500/30 space-y-8">
                {/* Timeline item 1 - Intermediate */}
                <div 
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-500">
                    <h1 className="text-xl font-medium text-white mb-1">Intermediate (ICS Computer Sceince)</h1>
                    <div className="text-cyan-400 font-medium mb-2">2022-2024</div>
                    <p className="text-gray-300">Punjab College Bahawalpur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider - Only on large screens */}
            <div className="hidden lg:block">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent mx-4"></div>
            </div>

            {/* Experience Section */}
            <div 
              className="flex-1 max-w-2xl"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h1 className="text-3xl font-semibold text-white">Experience</h1>
              </div>

              {/* Experience Timeline */}
              <div className="relative pl-12 border-l-2 border-purple-500/30 space-y-8">
                {/* Timeline item 1 */}
                <div 
                  className="relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-500">
                    <h1 className="text-xl font-medium text-white mb-1">Frontend Developer</h1>
                    <div className="text-purple-400 font-medium mb-2">2025-Present</div>
                    <p className="text-gray-300">CodesThinker Bahawalpur(Onsite)</p>
                  </div>
                </div>

                {/* Timeline item 2 */}
                <div 
                  className="relative"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 border-4 border-gray-900"></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-500">
                    <h1 className="text-xl font-medium text-white mb-1">ReactJS Developer</h1>
                    <div className="text-purple-400 font-medium mb-2">2025-Present</div>
                    <p className="text-gray-300">CodesThinker Bahawalpur (Onsite)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EducationWorkExperience;