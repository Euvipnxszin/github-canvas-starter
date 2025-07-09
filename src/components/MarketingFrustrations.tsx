import { TrendingDown, Eye, MessageSquare } from 'lucide-react';

const MarketingFrustrations = () => {
  const frustrations = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      text: "Você investe em anúncios, mas o custo por clique está cada vez mais alto."
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-500" />,
      text: "Você tenta crescer no Google, mas seu site continua invisível."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      text: "Você posta no Instagram, mas não engaja."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-8">
            Você já percebeu como o marketing digital pode ser 
            <span className="text-red-500"> frustrante</span>?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {frustrations.map((frustration, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="mb-4 flex justify-center">
                  {frustration.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {frustration.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-2xl p-8 shadow-2xl">
              <p className="text-xl sm:text-2xl font-bold font-playfair">
                "O problema não é a ferramenta. É a estratégia por trás da ferramenta."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFrustrations;