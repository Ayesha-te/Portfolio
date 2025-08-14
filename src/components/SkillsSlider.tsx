import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SkillsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      title: 'Frontend Mastery',
      description: 'Building responsive, interactive user interfaces with modern frameworks',
      skills: ['React', 'HTML', 'TailwindCSS', 'JavaScript'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Excellence',
      description: 'Scalable server-side solutions and robust API development',
      skills: ['FastAPI', 'Python', 'Chatbots', 'RESTAPIs', 'Django'],
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'AI Integration',
      description: 'Leveraging LLMs and machine learning for intelligent applications',
      skills: ['OpenAI API', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'APIs'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Additional',
      description: 'Social Media Marketing & Graphic Designing',
      skills: ['Campaigns', 'Hashtags', 'Content', 'Meta', 'Adobe'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className={`text-center bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {slide.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-gray-700/50 text-white text-sm font-medium hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
        <div
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default SkillsSlider;