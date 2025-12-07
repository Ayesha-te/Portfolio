import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Gotbae Agency Website',
      description: 'Made a website for GOTBAE agency.',
      image: 'GOTBAE.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://www.gotbae.com/',
      githubUrl: '#',
      category: 'Most Loved',
      features: [
        'Modern responsive layout',
        'Services showcase',
        'Contact/lead capture',
        'Fast-loading pages'
      ]
    },
    {
      id: 2,
      title: 'MOT Services Website',
      description: 'Made a website for Access auto services.',
      image: 'MOT.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://www.access-auto-services.co.uk/',
      githubUrl: '#',
      category: 'Most Loved',
      features: [
        'Booking and services info',
        'Mobile-friendly UI',
        'Clear CTAs',
        'SEO-friendly content'
      ]
    },
    {
      id: 3,
      title: 'Construction Estimation Website',
      description: 'Made a website for Genius Estimate .',
      image: 'GE.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://www.geniusestimate.com/',
      githubUrl: '#',
      category: 'Most Loved',
      features: [
        'Service overview',
        'Contact/inquiry',
        'Responsive design',
        'Clean navigation'
      ]
    },
    {
      id: 4,
      title: 'Nexokart ',
      description: 'Made an networking and E-commerce website for Nexokart.',
      image: 'nexo.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://www.nexokart.shop/',
      githubUrl: '#',
      category: 'Most Loved',
      features: [
        'Product catalog',
        'Shopping cart functionality',
        'Responsive design',
        'User-friendly interface'
      ]
    },
    {
      id: 5,
      title: 'Palm Homes Gujrat',
      description: 'Made a real estate website for Palm Homes Gujrat.',
      image: 'palms.jpeg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://www.kunjwalcity.pk/',
      githubUrl: '#',
      category: 'Most Loved',
      features: [
        'Property listings',
        'Modern layout',
        'Contact forms',
        'Mobile responsive'
      ]
    },
    {
      id: 6,
      title: 'Food Ordering Website',
      description: 'Food Ordering website made with HTML, CSS and JS.',
      image: 'food.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/food/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Menu browsing',
        'Add to cart UX',
        'Responsive design'
      ]
    },
    {
      id: 7,
      title: 'E-Shop Storefront',
      description: 'Amazon-style e-commerce site with product cards, categories, cart, and user login. Fully mobile responsive.',
      image: 'store.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/store/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Product listing',
        'Categories and filters',
        'Cart interactions'
      ]
    },
    {
      id: 8,
      title: 'Airline Company UI',
      description: 'Custom airline company dashboard built with HTML, CSS and JS.',
      image: 'airline.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/airline/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Dashboard layout',
        'Reusable components',
        'Responsive design'
      ]
    },
    {
      id: 9,
      title: 'University Website',
      description: 'University website with all content of University.',
      image: 'uni.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/University/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Multi-page navigation',
        'Content sections',
        'Mobile responsiveness'
      ]
    },
    {
      id: 10,
      title: 'TODO App',
      description: 'TODO list and Task website for students.',
      image: 'todo.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/todo/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Add/edit/delete tasks',
        'Local storage',
        'Responsive UI'
      ]
    },
    {
      id: 11,
      title: 'Brands Website',
      description: 'Made a website for brands with categories.',
      image: 'brands.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayesha-te.github.io/webpage/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Brand categories',
        'Cards grid',
        'Responsive layout'
      ]
    },
    {
      id: 29,
      title: 'Rocket Style Forge',
      description: 'Camera-focused website showcasing products and specs.',
      image: 'j1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://rocket-style-forge.vercel.app/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Product gallery',
        'Responsive product pages',
        'Search and filters'
      ]
    },
    {
      id: 30,
      title: 'Real Estate (Virid)',
      description: 'Real estate demo showcasing listings and property details.',
      image: 'j2.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://real-estate-nine-virid-74.vercel.app/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Property listings',
        'Contact/lead capture',
        'Responsive layouts'
      ]
    },
    {
      id: 31,
      title: 'RES Dusky',
      description: 'Real estate site example with modern UI and listing pages.',
      image: 'j3.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://res-dusky.vercel.app/',
      githubUrl: '#',
      category: 'Samples',
      features: [
        'Listings grid',
        'Property detail pages',
        'Mobile-first design'
      ]
    }
    ,
    {
      id: 12,
      title: 'AI Resume Screener',
      description: 'Automatically screens and ranks resumes using OpenAI.',
      image: 'rsum.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://ai-resume-screener-4guwkuwhezukxr3kfmfzhg.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Resume parsing and ranking',
        'Keyword and skills matching',
        'Export shortlisted candidates'
      ]
    },
    {
      id: 13,
      title: 'AI Code Review Bot',
      description: 'Reviews code and gives improvements and scores.',
      image: 'code.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://ai-code-review-bot-y2sxssxq5epese7wa4hdz2.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Automatic code suggestions',
        'Style and security checks',
        'Quality scoring'
      ]
    },
    {
      id: 14,
      title: 'AI Customer Support Chatbot',
      description: 'Smart chatbot that answers customer FAQs and general queries. Helps reduce manual support tasks.',
      image: 'chatbot.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://ai-customer-support-chatbot-zz6ph7hcgshjjhsnjwt3xn.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'FAQ automation',
        'Context-aware responses',
        'Custom knowledge base'
      ]
    },
    {
      id: 15,
      title: 'AI Trading Assistant',
      description: 'Provides real-time stock market insights and analysis. Useful for traders and finance analysts.',
      image: 'trading.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://legaldocanalyzer-jdxrepts3b62mc8wmi7zg4.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Market insights',
        'Signal explanations',
        'Risk notes'
      ]
    },
    {
      id: 16,
      title: 'AI PDF Search Assistant',
      description: 'Lets users ask questions from PDFs using LangChain + OpenAI. Saves time reading long documents.',
      image: 'pdf powered.jpg',
      technologies: ['Python', 'Streamlit', 'LangChain', 'OpenAI'],
      liveUrl: 'https://ai-powered-pdf-search-assistant-mijmxyekxjk3vy2gc34duh.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Multi-PDF ingestion',
        'Semantic search and Q&A',
        'Citations from sources'
      ]
    },
    {
      id: 17,
      title: 'AI Research Assistant',
      description: 'Answers research-based queries using Google Search and LLMs. Designed for students and researchers.',
      image: 'research2.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://ai-research-assistant-bxpghc3vjtnc7dchtn2sza.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Web search integration',
        'Source summarization',
        'Answer synthesis'
      ]
    },
    {
      id: 18,
      title: 'AI Legal Document Analyzer',
      description: 'Simulates answers based on legal documents provided. Perfect for job seekers and law students.',
      image: 'ann.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://legaldocanalyzer-2eqimkptod8qbmppb3hbho.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Document ingestion',
        'Clause-level Q&A',
        'Cited answers'
      ]
    },
    {
      id: 19,
      title: 'AI LangChain AutoGPT',
      description: 'Generates YouTube video titles and scripts from user input with an interactive Streamlit UI.',
      image: 'research.jpg',
      technologies: ['Python', 'Streamlit', 'LangChain', 'OpenAI'],
      liveUrl: 'https://langchainautogpt-3ogwsonmuencvwexagdr7x.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Task decomposition',
        'Content generation',
        'Editable outputs'
      ]
    },
    {
      id: 20,
      title: 'Multi-Agent AI Assistant',
      description: 'Combines multiple AI agents to answer complex queries. A powerful tool for multi-step tasks.',
      image: 'q_A.jpg',
      
      liveUrl: 'https://aiq-asystem-bugtb9xdbb6znvz26v2ufq.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Specialized agents',
        'Tool use and planning',
        'Multi-step reasoning'
      ]
    },
    {
      id: 21,
      title: 'Prompt Engineering Playground',
      description: 'Test and tweak prompts in real-time to learn prompt engineering. Built using OpenAI API and Streamlit.',
      image: 'prompt.jpg',
    
      liveUrl: 'https://promptplayground-kycfjb4ta7zagdtnfn7nyd.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Prompt templates',
        'Real-time evaluation',
        'History and comparisons'
      ]
    },
    {
      id: 22,
      title: 'Company Future Predictor',
      description: 'Predicts company future trends and insights using AI-powered analysis. Helps businesses make data-driven decisions.',
      image: 'trading.jpg',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      liveUrl: 'https://dyanyrpkmewmpxucjujcov.streamlit.app/',
      githubUrl: '#',
      category: ' LLMs',
      features: [
        'Future trend analysis',
        'Business insights',
        'Data-driven predictions'
      ]
    },
    {
      id: 23,
      title: 'Room Graphic Design',
      description: 'Promotional design created.',
      image: 'adss.jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Branding',
        'Poster/Flyer layout',
        'High-res export'
      ]
    },
    {
      id: 24,
      title: 'KFC Marketing Banner',
      description: 'Fast-food promotional graphic for KFC.',
      image: 'kfc.jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Food photography composition',
        'Bold CTAs',
        'Print-ready design'
      ]
    },
    {
      id: 25,
      title: 'Marketing 2Design',
      description: 'Retail market promotional visual.',
      image: 'market 2.jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Product highlights',
        'Price tags and badges',
        'Responsive social sizes'
      ]
    },
    {
      id: 26,
      title: 'Market  Design',
      description: 'Alternate retail market creative variation.',
      image: 'market (2).jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Variant layout',
        'Color theme exploration',
        'High clarity typography'
      ]
    },
    {
      id: 27,
      title: 'Furniture Catalog',
      description: 'Elegant furniture catalog spread.',
      image: 'Furniture.jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Lifestyle mockups',
        'Clean typography',
        'Print-ready assets'
      ]
    },
    {
      id: 28,
      title: 'Stationary Set',
      description: 'Stationary set design concept.',
      image: 'Stationary.jpg',
      technologies: ['Photoshop', 'Illustrator'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Graphics',
      features: [
        'Letterhead and cards',
        'Brand consistency',
        'High-res export'
      ]
    }
    
   
  ];

  const categories = ['All', 'Most Loved', 'Samples', ' LLMs', 'Graphics'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development and AI integration
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 ${project.category === 'Graphics' ? '' : 'hover:border-purple-500/50 transform hover:scale-105'}`}
            >
              {/* Project Media */}
              {project.category === 'Graphics' ? (
                // Show complete image without crop and without hover overlay for Graphics
                <div className="relative overflow-hidden">
                  <img
                    src={project.image.startsWith('http') ? project.image : new URL(`../assets/${project.image}`, import.meta.url).href}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={project.image.startsWith('http') ? project.image : new URL(`../assets/${project.image}`, import.meta.url).href}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-purple-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="hidden">
                  <div className="flex flex-wrap gap-2">
                 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-gray-700">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    {/* Modal Header */}
                    <div className="relative">
                      <img
                        src={project.image.startsWith('http') ? project.image : new URL(`../assets/${project.image}`, import.meta.url).href}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors duration-300"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <div className="flex space-x-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4 inline mr-2" />
                            Live Demo
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg mb-6">{project.description}</p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-400">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>


                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;