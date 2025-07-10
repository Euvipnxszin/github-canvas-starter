
import { Target, Zap, TrendingUp, ShoppingCart, FileText, Users, MessageCircle, Brain } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const servicos = [
    {
      icon: <Target className="h-12 w-12 text-orange-500" />,
      title: "GOSTARIA DE ATRAIR PESSOAS PRO MEU NEGÓCIO. QUERO E PRECISO DE NOVOS CLIENTES!",
      description: "Campanhas otimizadas no Google Ads e redes sociais para atrair clientes qualificados.",
      shortDescription: "Campanhas otimizadas para atrair clientes qualificados e aumentar suas vendas.",
      features: [
        "Google Ads e Meta Ads"
      ],
      detailedInfo: "Criamos e gerenciamos campanhas de tráfego pago altamente segmentadas para o seu negócio pet care. Utilizamos as principais plataformas como Google Ads, Facebook Ads e Instagram Ads para atrair clientes que realmente estão procurando pelos seus serviços.",
      color: "from-orange-400 to-red-500",
      additionalFeatures: ["Segmentação avançada", "Otimização contínua de campanhas", "Estratégia personalizada"]
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Quero vender um produto/serviço, mas só tem site institucional ou redes sociais",
      description: "Páginas de alta conversão projetadas para transformar visitantes em clientes.",
      shortDescription: "Páginas de alta conversão projetadas para transformar visitantes em clientes pagantes.",
      features: [
        "Design responsivo e otimizado",
        "Formulários de alta conversão",
        "Testes A/B contínuos",
        "Integração com ferramentas de análise"
      ],
      detailedInfo: "Desenvolvemos landing pages específicas para cada campanha, com design focado em conversão e otimizado para dispositivos móveis. Cada página é testada e refinada continuamente para maximizar a taxa de conversão.",
      color: "from-yellow-400 to-orange-500",
      additionalFeatures: []
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-red-500" />,
      title: "Só consigo vender para quem vem na loja física ou entra em contato pelo WhatsApp",
      description: "E-commerces completos e otimizados para vendas com todas as funcionalidades.",
      shortDescription: "E-commerces completos e otimizados para vendas com todas as funcionalidades necessárias.",
      features: [
        "Plataforma completa de vendas",
        "Gateway de pagamento integrado",
        "Gestão de estoque automatizada",
        "Otimização para conversão"
      ],
      detailedInfo: "Criamos lojas online completas para produtos pet, com sistema de pagamento integrado, gestão de estoque, carrinho de compras otimizado e todas as funcionalidades necessárias para um e-commerce de sucesso.",
      color: "from-red-400 to-orange-500",
      additionalFeatures: []
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-orange-600" />,
      title: "Só tem curioso nas minhas redes sociais",
      description: "Scripts personalizados e treinamento para maximizar a conversão no atendimento.",
      shortDescription: "Scripts personalizados e treinamento para maximizar a conversão no atendimento ao cliente.",
      features: [
        "Scripts de vendas otimizados",
        "Treinamento da equipe",
        "Fluxos de atendimento personalizados",
        "Acompanhamento de performance"
      ],
      detailedInfo: "Desenvolvemos scripts de atendimento personalizados para sua equipe, incluindo treinamentos práticos e acompanhamento de performance. Criamos fluxos de conversação que guiam o cliente da primeira interação até o fechamento da venda.",
      color: "from-orange-400 to-red-600",
      additionalFeatures: []
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-600" />,
      title: "Tem mês que bomba, tem mês que ninguém aparece",
      description: "Funis de vendas estratégicos para nutrir leads e aumentar a taxa de conversão.",
      shortDescription: "Funis de vendas estratégicos para nutrir leads e aumentar a taxa de conversão.",
      features: [
        "Mapeamento da jornada do cliente",
        "Automação de marketing",
        "Nutrição de leads qualificados",
        "Otimização contínua do funil"
      ],
      detailedInfo: "Criamos funis de vendas personalizados que acompanham toda a jornada do cliente, desde o primeiro contato até a fidelização. Utilizamos automação inteligente para nutrir leads e aumentar significativamente suas taxas de conversão.",
      color: "from-yellow-400 to-red-500",
      additionalFeatures: []
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "CRM Básico e Avançado",
      description: "Gestão completa de relacionamento com clientes para maximizar o lifetime value.",
      shortDescription: "Gestão completa de relacionamento com clientes para maximizar o lifetime value.",
      features: [
        "Organização completa de contatos",
        "Automação de follow-up",
        "Relatórios de vendas detalhados",
        "Integração com outras ferramentas"
      ],
      detailedInfo: "Implementamos sistemas CRM completos que organizam todos os seus contatos, automatizam follow-ups, geram relatórios detalhados de vendas e se integram perfeitamente com todas as suas outras ferramentas de marketing e vendas.",
      color: "from-red-400 to-yellow-500",
      additionalFeatures: []
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: "Remarketing",
      description: "Recuperação de vendas e reconversão de leads através de estratégias avançadas.",
      shortDescription: "Recuperação de vendas e reconversão de leads através de estratégias avançadas de remarketing.",
      features: [
        "Campanhas de retargeting",
        "E-mail marketing automatizado",
        "Recuperação de carrinho abandonado",
        "Segmentação comportamental"
      ],
      detailedInfo: "Desenvolvemos estratégias avançadas de remarketing para recuperar vendas perdidas e reconverter leads que não finalizaram a compra. Utilizamos e-mail marketing, retargeting e segmentação comportamental para maximizar suas oportunidades de venda.",
      color: "from-orange-400 to-yellow-600",
      additionalFeatures: []
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: "Inteligência Artificial para Pet Care",
      description: "Automação inteligente e chatbots personalizados para otimizar o atendimento e vendas.",
      shortDescription: "Automação inteligente e chatbots personalizados para otimizar o atendimento e vendas no setor pet.",
      features: [
        "Chatbots inteligentes para atendimento 24/7",
        "Automação de agendamentos",
        "Análise preditiva de comportamento",
        "Personalização de ofertas com IA"
      ],
      detailedInfo: "Implementamos soluções de inteligência artificial específicas para o mercado pet care, incluindo chatbots que entendem as necessidades dos tutores, automação de processos e análise preditiva para otimizar suas estratégias de vendas e atendimento.",
      color: "from-purple-400 to-blue-500",
      additionalFeatures: ["Machine Learning aplicado", "Integração com WhatsApp Business", "Dashboard de analytics avançado"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicos.map((servico, index) => (
            <ServiceCard
              key={index}
              icon={servico.icon}
              title={servico.title}
              shortDescription={servico.shortDescription}
              features={servico.features}
              detailedInfo={servico.detailedInfo}
              color={servico.color}
              buttonColor="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              additionalFeatures={servico.additionalFeatures}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
