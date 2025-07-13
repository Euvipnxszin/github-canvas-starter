import { Users, Target, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OperationSteps from '@/components/OperationSteps';
import { getAssetPath } from '@/lib/assets';
const Sobre = () => {
  const valores = [{
    icon: <Target className="h-8 w-8 text-orange-600" />,
    title: "Foco em Resultados",
    description: "Cada estratégia é pensada para gerar ROI mensurável e crescimento real para seu negócio pet care."
  }, {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Especialização Pet Care",
    description: "Conhecemos profundamente o mercado pet e suas particularidades. Não somos uma agência genérica."
  }, {
    icon: <Award className="h-8 w-8 text-yellow-600" />,
    title: "Transparência total",
    description: "Relatórios detalhados, métricas claras e comunicação constante. Você sempre saberá onde está seu investimento."
  }, {
    icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    title: "Branding e posicionamento",
    description: "Construímos estratégias de longo prazo que escalam junto com seu negócio."
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A Meltro Agency nasceu da paixão por transformar negócios que cuidam de vidas. 
              Somos especialistas em marketing digital para o setor pet care.
            </p>
          </div>
        </div>
      </section>

      {/* Fundador Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img alt="Fundador da Meltro Agency" className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl" src={getAssetPath("/lovable-uploads/fdbcb44d-372d-4a67-9b81-78fbce8d99d7.png")} />
              </div>
              
              <div>
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                  Por Que Criei a 
                  <span className="text-orange-500"> Meltro</span>
                </h2>
                
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p>Depois de três anos atendendo grandes players de diversos setores, percebi o quanto o mercado pet no Brasil estava carente de marketing digital especializado e com resultados reais.</p>
                  
                  <p>Notei clínicas veterinárias brilhantes lutando para encher a agenda, hospitais 24h invisíveis justamente no momento que mais precisavam aparecer, e serviços premium sendo confundidos com o básico.</p>
                  
                  <p className="font-semibold text-orange-500 text-xl">A Meltro nasce disso: performance de verdade, para negócios que realmente cuidam de vidas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Nossa Missão & Visão
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Transformar cada negócio pet care em uma referência local, gerando impacto real na vida dos pets e retorno garantido para os proprietários através de estratégias de marketing digital comprovadas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Visão</h3>
              <p className="text-gray-700 leading-relaxed">Ser a principal referência em marketing digital para o setor pet no Brasil, conhecidos pela especialização, resultados consistentes e pelo crescimento sustentável dos nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operação Inteligente */}
      <OperationSteps />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Vamos Crescer Juntos?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Se você tem um negócio pet care e quer transformar sua agenda vazia em lucro constante, vamos conversar.
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
            Falar com Nossa Equipe
          </button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Sobre;