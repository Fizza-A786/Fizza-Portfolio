import { Fragment, useState, useEffect } from 'react'
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
    // 2 seconds delay for showing spinner
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
            25% { color: #60a5fa; }
            50% { color: #c084fc; }
            75% { color: #fbbf24; }
            100% { color: #ffffff; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
          }
          
          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
          
          .animate-spin-reverse {
            animation: spin-reverse 2s linear infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 2s ease-in-out infinite;
          }
          
          .animate-color-change {
            animation: color-change 3s ease-in-out infinite;
          }
          
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
          `}
        </style>
        
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-950">
          {/* Main spinner container */}
          <div className="relative w-32 h-32">
            {/* Outer spinning ring with gradient */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin-slow"></div>
            
            {/* Middle ring spinning in opposite direction */}
            <div className="absolute inset-3 border-4 border-transparent border-b-green-400 border-l-yellow-400 rounded-full animate-spin-reverse"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse-slow"></div>
            
            {/* Plus sign with color change animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-3xl font-bold animate-color-change">+</div>
            </div>
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                style={{
                  left: `${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <Fragment>
      <div className='bg-gray-950'>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <EducationWorkExperience />
        <Services />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </Fragment>
  )
}

export default App