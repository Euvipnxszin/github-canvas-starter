
import { useState } from 'react';
import { CaseItem } from '@/types/case';
import CaseCard from './CaseCard';

interface CaseCarouselProps {
  cases: CaseItem[];
}

const CaseCarousel = ({ cases }: CaseCarouselProps) => {
  const [currentCase, setCurrentCase] = useState(0);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentCase * 100}%)` }}
        >
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 space-x-2">
        {cases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCase(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentCase 
                ? 'bg-purple-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseCarousel;
