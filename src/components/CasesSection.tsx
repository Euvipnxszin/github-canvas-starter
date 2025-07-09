import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CaseItem } from '@/types/case';
import CaseCarousel from './cases/CaseCarousel';

const CasesSection = () => {
  const cases: CaseItem[] = [
    {
      id: 1,
      title: "Clínica VetLife - Especialidades",
      category: "Clínica Veterinária",
      image: "/placeholder.svg",
      results: {
        revenue: "+380%",
        leads: "+250%",
        roi: "4.2x"
      },
      description: "Transformamos uma clínica veterinária comum em referência em dermatologia e ortopedia animal.",
      fullDescription: "A Clínica VetLife estava com agenda vazia e competindo apenas por preço. Implementamos uma estratégia completa de Google Ads focada em especialidades, campanhas educativas no Instagram e landing pages otimizadas. Em 90 dias, se tornaram a principal referência em dermatologia animal da região.",
      challenge: "Agenda vazia e baixo ticket médio",
      solution: "Google Ads para especialidades + Instagram educativo + Landing pages otimizadas",
      timeframe: "90 dias",
      testimonial: "A Meltro transformou nossa clínica. Antes tínhamos 2-3 consultas por dia, hoje nossa agenda está sempre cheia com casos de alta complexidade."
    },
    {
      id: 2,
      title: "PetHotel Premium - Ocupação Total",
      category: "Hotel para Pets",
      image: "/placeholder.svg",
      results: {
        revenue: "+420%",
        leads: "+180%",
        roi: "5.1x"
      },
      description: "Hotel de luxo para pets atingiu 98% de ocupação em feriados e alta temporada.",
      fullDescription: "O PetHotel Premium tinha quartos vazios e dificuldade para se diferenciar da concorrência. Criamos campanhas sazonais inteligentes, conteúdo premium mostrando as instalações e estratégias de remarketing para aumentar o ticket médio.",
      challenge: "Baixa ocupação e concorrência por preço",
      solution: "Campanhas sazonais + Marketing premium + Remarketing estratégico",
      timeframe: "120 dias",
      testimonial: "Nunca imaginei que poderíamos ter lista de espera nos feriados. A Meltro nos posicionou como o hotel premium que sempre quisemos ser."
    },
    {
      id: 3,
      title: "Emergency Pet 24h - Dominação Noturna",
      category: "Hospital 24h",
      image: "/placeholder.svg",
      results: {
        revenue: "+300%",
        leads: "+400%",
        roi: "3.8x"
      },
      description: "Hospital veterinário 24h se tornou a primeira opção em emergências na cidade.",
      fullDescription: "O Emergency Pet 24h não aparecia nas buscas de emergência e perdia clientes para concorrentes. Implementamos Google Ads hiperlocal, otimização para buscas móveis e campanhas focadas em urgências. Hoje dominam as buscas de emergência veterinária 24h.",
      challenge: "Invisibilidade nas buscas de emergência",  
      solution: "Google Ads hiperlocal + Mobile first + Campanhas de urgência",
      timeframe: "60 dias",
      testimonial: "Às 3h da manhã nosso telefone toca constantemente. A Meltro nos fez ser a primeira opção em emergências veterinárias."
    },
    {
      id: 4,
      title: "Spa Pet Deluxe - Estética Premium",
      category: "Estética Animal",
      image: "/placeholder.svg",
      results: {
        revenue: "+450%",
        leads: "+220%",
        roi: "4.7x"
      },
      description: "Spa de estética animal premium aumentou ticket médio e atraiu público qualificado.",
      fullDescription: "O Spa Pet Deluxe competia por preço e não conseguia comunicar seu valor premium. Desenvolvemos uma estratégia de antes/depois espetaculares, depoimentos exclusivos e campanhas segmentadas para público de alta renda.",
      challenge: "Competição por preço baixo e baixo reconhecimento do valor premium",
      solution: "Marketing visual premium + Segmentação por renda + Depoimentos exclusivos",
      timeframe: "75 dias",
      testimonial: "Nossos clientes agora entendem o valor do que oferecemos. Aumentamos nossos preços em 60% e a demanda só cresce."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">
            Cases de 
            <span className="bg-gradient-success bg-clip-text text-transparent"> Sucesso</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Resultados reais de negócios pet care que transformaram suas operações e multiplicaram o faturamento.
          </p>
        </div>

        <CaseCarousel cases={cases} />

        {/* CTA Centralizado */}
        <div className="text-center mt-12 sm:mt-16">
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse"
          >
            🚀 Quero Mais Clientes Agora
            <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
