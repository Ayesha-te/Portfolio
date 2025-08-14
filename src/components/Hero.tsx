import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/ME.jpeg'; 
import MyCV from '../assets/MyCV.pdf';
const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Web Developer', 'LLM Programmer', 'AI Enthusiast', 'Full Stack Developer'];

  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">

          {/* Profile Picture */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 shadow-lg">
            <img
              src={profilePic}
              alt="Ayesha Jahangir"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ayesha Jahangir
            </span>
          </h1>

          <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 h-12">
            <span className="text-gray-300">I'm a </span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              {currentText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and leveraging the power of 
            Large Language Models to build intelligent applications that transform user experiences.
          </p>

 

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
  {/* View My Work */}
  <a
    href="#projects"
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
  >
    View My Work
  </a>

  {/* Download CV */}
  <a
    href={MyCV}
    download="MyCV.pdf"
    className="px-8 py-4 border-2 border-gray-600 rounded-full text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
  >
    Download CV
  </a>
</div>


          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Ayesha-te"
              className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayesha-jahangir-b26744274/"
              className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ayeshajahangir280@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
