import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hi! I found your portfolio website and I\'m interested in discussing a project with you.'
  );

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/923144217577?text=${defaultMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          {/* Chat Bubble */}
          <div
            className={`absolute bottom-16 right-0 transform transition-all duration-300 ${
              isOpen
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-95 opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-2xl border border-gray-700 max-w-xs relative">
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-900 border-r border-b border-gray-700 transform rotate-45"></div>
              
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Ayesha </p>
                  <p className="text-xs text-gray-400">Available now</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">
                👋 Hi there! Need help with a project? Let's chat on WhatsApp!
              </p>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  Start Chat
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>
            
            {/* WhatsApp Icon */}
            <div className="relative">
              {isOpen ? (
                <X className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>

            {/* Online Indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-bounce"></div>
          </button>

          {/* Tooltip */}
          <div
            className={`absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
              isOpen
                ? 'scale-0 opacity-0'
                : 'scale-100 opacity-100 hover:scale-105'
            }`}
          >
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-2 h-2 bg-gray-800 transform rotate-45 -mt-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;