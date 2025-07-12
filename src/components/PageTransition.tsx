import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Transition overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-orange-500 to-red-500 z-50 transition-transform duration-500 ${
          isTransitioning 
            ? 'transform translate-x-0' 
            : 'transform translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Carregando...</p>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div
        className={`transition-all duration-500 ${
          isTransitioning 
            ? 'opacity-0 transform scale-95' 
            : 'opacity-100 transform scale-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;