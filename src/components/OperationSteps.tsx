import { MessageCircle, Bot, Users, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const OperationSteps = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-12 w-12 text-green-500" />,
      number: "01",
      title: "Cliente entra pelo WhatsApp ou site",
      description: "Primeira interação através dos canais digitais otimizados"
    },
    {
      icon: <Bot className="h-12 w-12 text-blue-500" />,
      number: "02", 
      title: "Agente IA entende e classifica o pedido",
      description: "Inteligência artificial analisa e categoriza automaticamente cada solicitação"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-500" />,
      number: "03",
      title: "Você (ou o time de humanos) entra onde precisa",
      description: "Intervenção humana estratégica apenas nos momentos cruciais"
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      number: "04",
      title: "A IA envia atualizações, cuida do follow-up e garante satisfação",
      description: "Automação completa do processo de acompanhamento e fidelização"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gray-950">
              Como funciona nossa operação inteligente
            </h2>
            <p className="text-xl text-gray-600">
              Um sistema inteligente que combina automação avançada com expertise humana
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="relative group">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent z-10"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden group-hover:scale-105">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Step number */}
                      <div className="text-6xl font-bold text-gray-200 mb-4 group-hover:text-orange-200 transition-colors">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-orange-100 group-hover:to-red-100 transition-all duration-300">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationSteps;