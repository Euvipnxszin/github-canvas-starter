import { useState, useEffect, useRef } from 'react';
import CounterAnimation from './CounterAnimation';

interface TypewriterResultsProps {
  texts: string[];
  numbers: { value: number; suffix: string }[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterResults = ({ 
  texts, 
  numbers,
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetweenTexts = 3000 
}: TypewriterResultsProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowNumbers(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  const currentNumber = numbers[currentTextIndex] || numbers[0];

  return (
    <div ref={ref} className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-500 group-hover:border-purple-600 transition-colors">
      <div className="text-purple-700 font-bold text-base sm:text-lg flex items-center">
        📈 
        <span className="ml-2">
          {showNumbers && (
            <CounterAnimation 
              end={currentNumber.value} 
              suffix={currentNumber.suffix} 
              duration={2000}
            />
          )}
          <span className="ml-1">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TypewriterResults;