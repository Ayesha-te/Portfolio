import React from 'react';
import SkillsSlider from './SkillsSlider';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'HTML', level: 95, icon: '🔷' },
        { name: 'JavaScript', level: 85, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'FastAPI', level: 88, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Django', level: 82, icon: '📊' },
        { name: 'REST APIs', level: 90, icon: '🔗' },
             ]
    },
    {
      title: 'AI & LLM',
      skills: [
        { name: 'OpenAI API & LangChain', level: 98, icon: '🤖 🔗' },
        { name: 'Vector Databases', level: 85, icon: '🗄️' },
        { name: 'Prompt Engineering', level: 90, icon: '💭' },
        { name: 'ML Integration', level: 80, icon: '🧠' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </div>

        {/* Skills Slider Component */}
        <div className="mb-16">
          <SkillsSlider />
        </div>

        {/* Detailed Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-110"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
           
            { number: '2+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies Mastered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '100%', label: 'On-time Delivery' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;