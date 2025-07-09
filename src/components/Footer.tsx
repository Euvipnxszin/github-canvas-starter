
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '@/lib/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={getAssetPath("/lovable-uploads/48dbf628-24e0-4d2e-afd1-35f480d46e60.png")} 
                alt="Meltro Agency"
                className="h-10 sm:h-12 w-auto"
              />
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-purple-400">
                Meltro Agency
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Especialistas em marketing digital para o setor pet care. 
              Transformamos agendas vazias em fluxo constante de clientes qualificados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/meltro_agency7857/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 p-2.5 sm:p-3 rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 p-2.5 sm:p-3 rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <nav className="space-y-3">
              <Link 
                to="/sobre" 
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
              >
                Serviços
              </Link>
              <Link 
                to="/casos" 
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
              >
                Estudos de Caso
              </Link>
            </nav>
          </div>

          {/* Contatos */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Contatos</h4>
            <div className="space-y-3">
              <a 
                href="mailto:meltroagency@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>meltroagency@gmail.com</span>
              </a>
              <a 
                href="tel:+12365000042" 
                className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>(236) 500-0042</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 Meltro Agency. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs sm:text-sm">
            Performance real para negócios que cuidam de vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
