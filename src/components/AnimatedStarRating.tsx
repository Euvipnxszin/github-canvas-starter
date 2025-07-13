import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface AnimatedStarRatingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  duration?: number;
  onHover?: boolean;
}

const AnimatedStarRating = ({ 
  size = 'md', 
  className = '', 
  duration = 7000,
  onHover = false
}: AnimatedStarRatingProps) => {
  const [animatedStars, setAnimatedStars] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  useEffect(() => {
    if (!onHover) {
      // Auto animation without hover
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startAnimation();
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [hasStarted, onHover]);

  useEffect(() => {
    if (onHover && isHovered && !hasStarted) {
      setHasStarted(true);
      startAnimation();
    }
  }, [isHovered, onHover, hasStarted]);

  const startAnimation = () => {
    setAnimatedStars(0);
    const interval = duration / 5; // 5 stars
    
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        setAnimatedStars(i);
      }, interval * i);
    }
  };

  const handleMouseEnter = () => {
    if (onHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (onHover) {
      setIsHovered(false);
      // Reset animation when mouse leaves
      setAnimatedStars(0);
      setHasStarted(false);
    }
  };

  return (
    <div 
      ref={ref}
      className={`flex items-center space-x-1 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
    >
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} transition-all duration-500 ${
            index < animatedStars 
              ? 'text-yellow-400 fill-current scale-110' 
              : 'text-gray-300 scale-100'
          }`}
        />
      ))}
    </div>
  );
};

export default AnimatedStarRating;