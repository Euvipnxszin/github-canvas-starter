import { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const ParallaxBackground = ({ children, className = '', intensity = 0.5 }: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated depth background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600"
        style={{
          transform: `translateY(${scrollY * intensity}px)`,
        }}
      >
        {/* Animated corner gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-pink-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-400/30 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;