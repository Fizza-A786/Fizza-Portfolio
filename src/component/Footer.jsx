import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/Fizza-A786",  // Updated to placeholder for Fizza Amjad
      color: "hover:text-purple-400",
      animation: "hover:scale-125 hover:-translate-y-1"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://www.linkedin.com/in/fizza-amjad-377859381",  // Updated to placeholder for Fizza Amjad
      color: "hover:text-blue-400",
      animation: "hover:rotate-12 hover:scale-110"
    },
    { 
      icon: <FaEnvelope />, 
      url: "fizzaamjad813@gmail.com",  // Updated to placeholder email for Fizza Amjad
      color: "hover:text-red-400",
      animation: "hover:translate-y-1 hover:scale-110"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" }
  ];

  const resources = [
    { name: "Tutorials", href: "#tutorials" },
    { name: "Tools", href: "#tools" },
    { name: "Community", href: "#community" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div data-aos="fade-up">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center mb-6"
            >
              <FaUser className="text-blue-400 mr-3 text-2xl" />
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                About Me
              </h3>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 leading-relaxed"
            >
              I'm Fizza Amjad, a passionate frontend web developer who loves building amazing web applications and solving real-world problems. With a focus on clean code, scalability, and user experience.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center"
                  >
                    <motion.span 
                      className="inline-block mr-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center"
                  >
                    <motion.span 
                      className="inline-block mr-2"
                      whileHover={{ rotate: 90 }}
                    >
                      ✧
                    </motion.span>
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.color} bg-gray-800 p-3 rounded-full transition-all duration-300 ${social.animation}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-gray-300 italic"
            >
              Follow me for updates, tips, and more!
            </motion.p>
          </div>
        </div>

        {/* Copyright */}
         <p data-aos="fade-up" className="border-t border-gray-800 pt-8 text-center">
          Made with <span className="">❤️</span> by <span className="font-bold">Fizza Amjad</span> &copy; {new Date().getFullYear()}
        </p>
     
      </div>
    </footer>
  );
};

export default Footer;