import { Fragment, useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'   // <-- sirf ye import add hua
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import AboutMe from './component/AboutMe'
import Services from './component/Services'
import Projects from './component/Projects'
import MySkills from './component/MySkills'
import EducationWorkExperience from './component/EducationWorkExperience'
import Footer from './component/Footer'
import ContactUs from './component/ContactUs'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <>
        <style>
          {`
          /* same loading CSS as before */
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; transform: scale(0.95); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes color-change {
            0% { color: #ffffff; }
            25% { color: #ec4899; }
            50% { color: #f472b6; }
            75% { color: #fb7185; }
            100% { color: #ffffff; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
          }
          .animate-spin-slow { animation: spin-slow 3s linear infinite; }
          .animate-spin-reverse { animation: spin-reverse 2s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          .animate-color-change { animation: color-change 3s ease-in-out infinite; }
          .animate-float { animation: float 2s ease-in-out infinite; }
          `}
        </style>

        <div className="flex items-center justify-center h-screen bg-black">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 border-r-pink-400 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-3 border-4 border-transparent border-b-pink-300 border-l-pink-200 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-6 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-3xl font-bold animate-color-change">+</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <Fragment>
      <div className='bg-black'>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <EducationWorkExperience />
        <Services />
        <Projects />
        <ContactUs />
        <Footer />

        {/* WhatsApp Icon (sirf ye add hua) */}
        <a
          href="https://wa.me/9203260569202"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform "
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </Fragment>
  )
}

export default App
