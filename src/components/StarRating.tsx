import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  className?: string;
}

const StarRating = ({ rating = 5, size = 'md', interactive = true, className = '' }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(rating);

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
    const activeRating = hoveredRating || currentRating;
    if (index < activeRating) {
      return 'text-yellow-400 fill-current';
    }
    return 'text-gray-300';
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
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