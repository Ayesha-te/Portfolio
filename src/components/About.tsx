import React from 'react';
import { Brain, Code, Zap, Award } from 'lucide-react';
import profilePic from '../assets/webdev.jpg'; 

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Expert in React, Django, JavaScript, and modern web technologies'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'LLM Integration',
      description: 'Specialized in integrating AI models and building intelligent applications'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Focused on creating fast, scalable, and efficient web solutions'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Practices',
      description: 'Committed to clean code, testing, and continuous learning'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden border border-gray-700/50 flex items-center justify-center">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Passionate Developer & AI Enthusiast
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a dedicated web developer with over 2 years of experience creating 
                modern, scalable applications. My expertise spans from front-end frameworks 
                like React to back-end technologies including Django and FastAPI.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Recently, I've been diving deep into the world of Large Language Models 
                and AI integration, helping businesses leverage cutting-edge AI to enhance 
                their digital presence and user experience.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-sm text-gray-400">Problem Solving</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
