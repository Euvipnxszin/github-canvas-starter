import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
}

const StarRating = ({ rating = 5, size = 'md', interactive = false, className = '' }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(rating);
  const [animatedStars, setAnimatedStars] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate stars over 7 seconds
            for (let i = 1; i <= 5; i++) {
              setTimeout(() => {
                setAnimatedStars(i);
              }, (7000 / 5) * i);
            }
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [interactive, hasAnimated]);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoveredRating(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoveredRating(null);
    }
  };

  const handleClick = (index: number) => {
    if (interactive) {
      setCurrentRating(index + 1);
    }
  };

  const getStarColor = (index: number) => {
    if (!interactive) {
      if (index < animatedStars) {
        return 'text-yellow-400 fill-current scale-110';
      }
      return 'text-gray-300 scale-100';
    }
    
    const activeRating = hoveredRating || currentRating;
    if (index < activeRating) {
      return 'text-yellow-400 fill-current';
    }
    return 'text-gray-300';
  };

  return (
    <div ref={ref} className={`flex items-center space-x-1 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} ${getStarColor(index)} transition-all duration-200 ${
            interactive ? 'cursor-pointer hover:scale-110' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;