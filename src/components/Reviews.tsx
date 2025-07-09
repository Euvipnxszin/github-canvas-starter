import { Star } from 'lucide-react';
const Reviews = () => {
  const reviews = [{
    name: "Dra. Marina Silva",
    business: "Clínica Veterinária PetLife",
    rating: 5,
    text: "Em 45 dias, nossa agenda passou de 60% para 95% de ocupação. O investimento se pagou na primeira semana!",
    platform: "Google"
  }, {
    name: "Carlos Eduardo",
    business: "Hotel Pet Luxo",
    rating: 5,
    text: "Feriados sempre lotados agora. A estratégia sazonal da Meltro é impressionante. ROI de 400% em 3 meses.",
    platform: "Facebook"
  }, {
    name: "Ana Beatriz",
    business: "Estética Animal Premium",
    rating: 5,
    text: "Conseguimos triplicar nosso ticket médio e atrair clientes que realmente valorizam nosso trabalho premium.",
    platform: "Trustpilot"
  }, {
    name: "Dr. Roberto Lima",
    business: "Hospital Veterinário 24h",
    rating: 5,
    text: "Agora somos a primeira opção em emergências na cidade. Campanhas no Google Ads que realmente funcionam!",
    platform: "Google"
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            O Que Dizem Nossos 
            <span className="text-yellow-500"> Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avaliações reais de negócios que transformaram seus resultados com nossas estratégias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {review.platform}
                </span>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-purple-600 font-medium">{review.business}</div>
              </div>
            </div>)}
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default Reviews;