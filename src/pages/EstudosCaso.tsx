
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotificationForm from '@/components/NotificationForm';
import CounterAnimation from '@/components/CounterAnimation';
import ScrollReveal from '@/components/ScrollReveal';
import { Construction, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const EstudosCaso = () => {
  const [isNotificationFormOpen, setIsNotificationFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Estudos de Caso
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Resultados reais de negócios pet care que transformaram suas operações 
              e multiplicaram o faturamento com nossas estratégias.
            </p>
          </div>
        </div>
      </section>

      {/* Em Construção */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 border border-orange-200">
              <Construction className="h-20 w-20 text-orange-600 mx-auto mb-8" />
              
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Página em Construção
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Estamos finalizando nossos estudos de caso mais detalhados para você ver 
                exatamente como transformamos negócios pet care em máquinas de gerar clientes.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-left max-w-2xl mx-auto mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  O que você vai encontrar aqui em breve:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Casos detalhados com antes/depois completos
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Estratégias específicas usadas em cada projeto
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Resultados mensuráveis e timeline de crescimento
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Depoimentos em vídeo dos proprietários
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    Downloads de relatórios de performance
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center text-orange-500 mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Previsão de lançamento: Março 2026</span>
              </div>

              <button 
                onClick={() => setIsNotificationFormOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ser Notificado do Lançamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview dos Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
              Preview dos Nossos Resultados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    <CounterAnimation prefix="+" end={380} suffix="%" duration={2000} />
                  </div>
                  <div className="text-gray-600 mb-4">Aumento no faturamento</div>
                  <div className="text-sm text-gray-500">Clínica Veterinária - SP</div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    <CounterAnimation prefix="+" end={250} suffix="%" duration={2000} />
                  </div>
                  <div className="text-gray-600 mb-4">Aumento em leads qualificados</div>
                  <div className="text-sm text-gray-500">Hospital 24h - RJ</div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover-lift">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    <CounterAnimation end={4.2} suffix="x" duration={2000} />
                  </div>
                  <div className="text-gray-600 mb-4">Retorno sobre investimento</div>
                  <div className="text-sm text-gray-500">Pet Shop Premium - MG</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <NotificationForm
        isOpen={isNotificationFormOpen}
        onClose={() => setIsNotificationFormOpen(false)}
      />
    </div>
  );
};

export default EstudosCaso;
