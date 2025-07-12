
import { Target, Zap, Crown, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CounterAnimation from './CounterAnimation';

const Solutions = () => {
  const solutions = [
    {
      icon: <Target className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />,
      title: "Transformamos indicações em fluxo constante de novos clientes",
      description: "Com campanhas de tráfego pago estratégicas e posicionamento digital, sua clínica deixa de depender só do boca a boca. Você atrai quem realmente precisa dos seus serviços — todo dia.",
      results: "+250% em consultas de emergência",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />,
      title: "Defendemos seu território das franquias gigantes",
      description: "Criamos campanhas personalizadas que reforçam o valor da sua marca local. Sua clínica se posiciona como referência e fideliza clientes antes mesmo que a concorrência apareça.",
      results: "95% de ocupação em feriados",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Crown className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
      title: "Funil de vendas personalizado",
      description: "fazemos a estratégia perfeita para cada caso, transformamos lead curioso em cliente guiando através de um funil personalizado",
      results: "+180% no ticket médio",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />,
      title: "Investimento que retorna",
      description: "Marketing feito com inteligência: sem achismo, sem jogar dinheiro fora. Toda ação é pensada pra trazer retorno. Montamos seu funil com foco em agendamentos, recorrência e venda de serviços de maior margem.",
      results: "obtenha ROI com margem de LUCRO",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Como a Meltro 
              <span className="bg-gradient-success bg-clip-text text-transparent"> Resolve</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Estratégias comprovadas que transformam negócios pet care em máquinas de gerar clientes qualificados.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 sm:mb-6 animate-bounce-subtle`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-playfair group-hover:text-purple-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {solution.description}
                </p>
                
                <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-500 group-hover:border-purple-600 transition-colors">
                  <div className="text-purple-700 font-bold text-base sm:text-lg flex items-center">
                    📈 <span className="ml-2">{solution.results}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Microinterações com números */}
        <ScrollReveal delay={800}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover-lift p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <CounterAnimation end={300} suffix="%" />
              </div>
              <p className="text-blue-700 font-medium">Aumento em consultas</p>
            </div>
            <div className="group hover-lift p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CounterAnimation end={48} suffix="h" />
              </div>
              <p className="text-green-700 font-medium">Para primeiros resultados</p>
            </div>
            <div className="group hover-lift p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <CounterAnimation end={95} suffix="%" />
              </div>
              <p className="text-purple-700 font-medium">Taxa de satisfação</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Solutions;
