import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      item: "Experiência no mercado pet",
      freelancer: "Limitada",
      agency: "Média",
      meltro: "Alta. Nós vivemos e respiramos os desafios do mercado pet. Falamos a sua língua desde o primeiro dia"
    },
    {
      item: "Estratégias personalizadas",
      freelancer: "Templates genéricos",
      agency: "Métodos datados",
      meltro: "GERAMOS NOVA DEMANDA de forma automática"
    },
    {
      item: "Automação com IA",
      freelancer: "Básico",
      agency: "Automação parcial que gera falhas, Serviços engessados e frustração",
      meltro: "NATIVO. Nosso sistema é construído sobre uma base de Inteligência Artificial para prospecção, SEO e otimização"
    },
    {
      item: "Potencial de ROI e Escalabilidade",
      freelancer: "Baixo e imprevisível, dependente do seu tempo limitado",
      agency: "Difícil de medir, muitas vezes focado em métricas de vaidade (curtidas).",
      meltro: "Exponencial. Focado 100% em métricas de negócio (faturamento, clientes) e sistemas que escalam junto com você."
    },
    {
      item: "Integração completa",
      freelancer: "Ferramentas básicas",
      agency: "Algumas integrações",
      meltro: "Ecossistema completo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-8">
            Compare suas <span className="text-orange-500">opções</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A escolha de um parceiro de marketing define o futuro do seu faturamento. Veja uma comparação honesta das suas opções
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <th className="text-left p-6 font-semibold text-lg">Critério</th>
                    <th className="text-center p-6 font-semibold text-lg">Freelancer</th>
                    <th className="text-center p-6 font-semibold text-lg">Outras Agências</th>
                    <th className="text-center p-6 font-semibold text-lg bg-yellow-400 text-black">
                      Meltro Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="p-6 font-medium text-gray-900">{comparison.item}</td>
                      <td className="p-6 text-center text-gray-600">{comparison.freelancer}</td>
                      <td className="p-6 text-center text-gray-600">{comparison.agency}</td>
                      <td className="p-6 text-center font-semibold text-orange-600 bg-yellow-50">
                        {comparison.meltro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;