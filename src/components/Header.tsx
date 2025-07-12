
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/casos', label: 'Estudos de Caso' }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={getAssetPath("/lovable-uploads/48dbf628-24e0-4d2e-afd1-35f480d46e60.png")} 
              alt="Meltro Agency"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">
              Meltro agency
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-orange-500 ${
                  isActive(item.path) 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full btn-hover"
            >
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-orange-500 px-2 py-1 ${
                    isActive(item.path) ? 'text-orange-500' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full w-fit btn-hover"
              >
                Falar Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
