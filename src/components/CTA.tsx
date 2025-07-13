
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assets';

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{
      backgroundImage: `url(${getAssetPath('/lovable-uploads/b74c338f-1861-4bc9-804f-9eff092d02e7.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-4 sm:mb-6 px-2">
            Na Meltro Agency, a gente não late — a gente 
            <span className="text-yellow-300"> morde resultado</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Análise Gratuita</div>
              <div className="text-xs sm:text-sm opacity-90">Do seu negócio e concorrência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Resultados em 24h</div>
              <div className="text-xs sm:text-sm opacity-90">Primeiros leads qualificados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
              <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Resultados Garantidos</div>
              <div className="text-xs sm:text-sm opacity-90">Performance comprovada</div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              🚀 Quero Dominar Meu Mercado Agora
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            
            <div className="text-xs sm:text-sm opacity-75 px-4">
              ⚡ Resposta em menos de 2 horas | 🎯 Consultoria gratuita incluída
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
