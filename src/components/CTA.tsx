
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/assets';

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{
      backgroundImage: `url(${getAssetPath('/lovable-uploads/b74c338f-1861-4bc9-804f-9eff092d02e7.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Na Meltro Agency, a gente não late — a gente 
            <span className="text-yellow-300"> morde resultado</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="font-bold mb-2">Análise Gratuita</div>
              <div className="text-sm opacity-90">Do seu negócio e concorrência</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="font-bold mb-2">Resultados em 24h</div>
              <div className="text-sm opacity-90">Primeiros leads qualificados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ArrowRight className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="font-bold mb-2">Resultados Garantidos</div>
              <div className="text-sm opacity-90">Performance comprovada</div>
            </div>
          </div>

          <div className="space-y-6">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              🚀 Quero Dominar Meu Mercado Agora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="text-sm opacity-75">
              ⚡ Resposta em menos de 2 horas | 🎯 Consultoria gratuita incluída
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
