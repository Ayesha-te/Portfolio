import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-purple-500 rounded-lg rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            )}
            {i % 3 === 2 && (
              <div className="w-20 h-20 border-2 border-pink-500 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundAnimation;