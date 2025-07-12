import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';
import CounterAnimation from './CounterAnimation';
import ParallaxBackground from './ParallaxBackground';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  const typewriterTexts = [
    "pet shop independente",
    "pronto socorro 24h pet", 
    "Negócios que cuidam de vidas",
    "Hospital Veterinário 24h",
    "Clínicas veterinárias",
    "Hotel e creche pet"
  ];

  return (
    <ParallaxBackground className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <ScrollReveal delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight px-2 animate-float">
            Transforme Sua Agenda 
            <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Vazia em Lucro
            </span>
          </h1>
        </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4 min-h-[60px] flex items-center justify-center">
              <strong>
                <TypewriterText texts={typewriterTexts} />
              </strong>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <div className="flex justify-center items-center mb-8 sm:mb-12 px-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="w-full sm:w-auto btn-hover animate-glow text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"
              >
                Quero Mais Clientes Agora
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={800}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift">
                <div className="text-2xl sm:text-3xl font-bold mb-2">
                  <CounterAnimation end={300} suffix="%" />
                </div>
                <div className="text-sm opacity-90">Aumento médio em consultas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift">
                <div className="text-2xl sm:text-3xl font-bold mb-2">
                  <CounterAnimation end={48} suffix="h" />
                </div>
                <div className="text-sm opacity-90">Para primeiros resultados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover-lift">
                <div className="text-2xl sm:text-3xl font-bold mb-2">
                  <CounterAnimation prefix="R$ " end={50} suffix="M+" />
                </div>
                <div className="text-sm opacity-90">Faturamento gerado em 2024</div>
              </div>
            </div>
          </ScrollReveal>
      </div>
    </ParallaxBackground>
  );
};

export default Hero;
