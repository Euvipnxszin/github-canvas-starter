
import { useState, useEffect } from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problems = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const problems = [{
    icon: <Clock className="h-16 w-16 sm:h-20 sm:w-20 text-red-500" />,
    title: "Alta dependência de indicação e boca a boca",
    description: "Clientes fiéis são ótimos, mas contar só com o boca a boca é arriscado. E se amanhã um concorrente abrir do outro lado da rua com marketing agressivo? Quem não é visto, não é lembrado.",
    audience: "Clínicas e Creches",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50"
  }, {
    icon: <AlertTriangle className="h-16 w-16 sm:h-20 sm:w-20 text-orange-500" />,
    title: "As grandes franquias estão roubando sua fatia do bolo",
    description: "Petz, Cobasi e cia. estão chegando com estrutura, preço e presença digital pesada. Se seu negócio continuar invisível online, vai perder espaço — mesmo sendo melhor.",
    audience: "Hospitais 24h",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50"
  }, {
    icon: <TrendingDown className="h-16 w-16 sm:h-20 sm:w-20 text-purple-500" />,
    title: "Margens apertadas e medo de investir errado",
    description: "Já gastou com agência que prometeu o mundo e não entregou nem 10 curtidas? A gente entende. Por isso, trabalhamos com estratégias validadas, focadas em atrair clientes reais",
    audience: "Serviços Premium",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  }];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentProblem(prev => (prev + 1) % problems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, problems.length]);

  const goToProblem = (index: number) => {
    setCurrentProblem(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Você Reconhece Estes 
            <span className="text-red-500"> Problemas</span>?
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative h-[500px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentProblem 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : index < currentProblem 
                      ? '-translate-x-full opacity-0 scale-95' 
                      : 'translate-x-full opacity-0 scale-95'
                }`}
              >
                <div className={`h-full ${problem.bgColor} relative`}>
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-10`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 sm:p-12 text-center">
                    {/* Icon with floating animation */}
                    <div className="mb-6 animate-bounce">
                      {problem.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-playfair leading-tight">
                      {problem.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-2xl">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {problems.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToProblem(index)} 
                className={`transition-all duration-300 ${
                  index === currentProblem 
                    ? 'w-12 h-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
