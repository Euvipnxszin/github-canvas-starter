import { Bot, Phone, Settings, BookOpen } from 'lucide-react';
import ServiceCard from './ServiceCard';

const AIServicesSection = () => {
  const servicosIA = [
    {
      icon: <Bot className="h-12 w-12 text-purple-500" />,
      title: "Todo dia perguntam preço do banho, horário, localização, vacinas e eu não consigo responder todo mundo",
      description: "Atendimento automatizado 24/7 com inteligência artificial que converte visitantes em clientes.",
      shortDescription: "Atendimento automatizado 24/7 com inteligência artificial que converte visitantes em clientes.",
      features: [
        "Respostas personalizadas por nicho",
        "Integração com WhatsApp e site",
        "Qualificação automática de leads",
        "Relatórios de conversação"
      ],
      detailedInfo: "Desenvolvemos chatbots inteligentes personalizados para seu negócio pet care, capazes de atender clientes 24/7, qualificar leads automaticamente e integrar-se perfeitamente com WhatsApp e seu site.",
      color: "from-purple-400 to-blue-500"
    },
    {
      icon: <Phone className="h-12 w-12 text-blue-500" />,
      title: "Tenho uma lista enorme de clientes inativos, mas ninguém consegue ligar",
      description: "Sistema de ligações automatizadas com IA para qualificação e agendamento de consultas.",
      shortDescription: "Sistema de ligações automatizadas com IA para qualificação e agendamento de consultas.",
      features: [
        "Ligações automáticas personalizadas",
        "Agendamento inteligente", 
        "Qualificação de prospects",
        "Integração com CRM"
      ],
      detailedInfo: "Nossa IA de ligação realiza chamadas automatizadas personalizadas, qualifica prospects de forma inteligente, agenda consultas automaticamente e se integra perfeitamente com seu sistema CRM para um fluxo de trabalho otimizado.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Settings className="h-12 w-12 text-green-500" />,
      title: "Se eu parar de anunciar, paro de vender e minhas redes sociais são desconectadas",
      description: "Soluções completas de marketing de entrada prontas para usar e gerar resultados.",
      shortDescription: "Soluções completas de marketing de entrada prontas para usar e gerar resultados imediatos.",
      features: [
        "Integração Completa Para Unificar Operações",
        "Templates otimizados",
        "Automação de nutrição",
        "Dashboard de resultados"
      ],
      detailedInfo: "Oferecemos sistemas completos de inbound marketing prontos para implementar, incluindo configuração automática, templates otimizados, automação de nutrição de leads e dashboards detalhados para acompanhar seus resultados em tempo real.",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-500" />,
      title: "Agentes de IA altamente personalizados",
      description: "Agentes de inteligência artificial personalizados para automatizar processos específicos do seu negócio pet care.",
      shortDescription: "Agentes de inteligência artificial personalizados para automatizar processos específicos do seu negócio pet care.",
      features: [
        "IA personalizada para seu nicho específico",
        "Automação de processos complexos",
        "Aprendizado contínuo do seu negócio",
        "Integração com todos os seus sistemas"
      ],
      detailedInfo: "Desenvolvemos agentes de IA completamente personalizados para as necessidades específicas do seu negócio pet care. Estes agentes aprendem continuamente sobre seus processos, clientes e mercado, automatizando tarefas complexas e fornecendo insights valiosos para otimizar suas operações e aumentar sua lucratividade.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: <Bot className="h-12 w-12 text-indigo-500" />,
      title: "Consultoria",
      description: "Consultoria especializada para implementação e otimização de todas as soluções de IA e automação.",
      shortDescription: "Consultoria especializada para implementação e otimização de todas as soluções de IA e automação.",
      features: [
        "Obtenha escalabilidade real",
        "Implementação guiada",
        "Acompanhamento dos resultados"
      ],
      detailedInfo: "Obtenha um Parceiro Estratégico e sinta na pele o por que é muito Melhor que uma Solução 100% Automatizada\n\nNossa consultoria especializada oferece análise estratégica completa do seu negócio, implementação guiada de todas as soluções, treinamento completo da sua equipe e suporte contínuo para garantir o máximo resultado dos investimentos.",
      color: "from-indigo-400 to-purple-500",
      additionalFeatures: ["Suporte contínuo", "Machine Learning avançado", "Processamento de linguagem natural", "Análise preditiva personalizada"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Substitua seu SDR caro por nossas soluções de IA
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluções Inteligentes com IA e Automação para obter escalabilidade real, maior eficiência e reaproveitamento de cada Lead
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicosIA.map((servico, index) => (
            <ServiceCard
              key={index}
              icon={servico.icon}
              title={servico.title}
              shortDescription={servico.shortDescription}
              features={servico.features}
              detailedInfo={servico.detailedInfo}
              color={servico.color}
              buttonColor="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              additionalFeatures={servico.additionalFeatures || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;