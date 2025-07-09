import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const faqs = [{
    question: "Quanto tempo leva para ver os primeiros resultados?",
    answer: "Nossos clientes começam a ver aumento no fluxo de leads em 24-48h após o lançamento das campanhas. Resultados consistentes e escaláveis aparecem entre 7-15 dias."
  }, {
    question: "Vocês trabalham apenas com grandes clínicas?",
    answer: "Não! Atendemos desde clínicas individuais até redes de hospitais. Nosso foco é no potencial de crescimento e na qualidade do atendimento, não no tamanho atual do negócio."
  }, {
    question: "Qual o investimento mínimo em tráfego pago?",
    answer: "Recomendamos um orçamento mínimo de R$ 3.000/mês em mídia paga para resultados consistentes. Este valor varia conforme a concorrência local e objetivos específicos."
  }, {
    question: "Como vocês garantem que vou atrair clientes qualificados?",
    answer: "Utilizamos segmentação avançada, palavras-chave estratégicas e landing pages otimizadas. Focamos em intenção de compra e localização, garantindo que apenas prospects qualificados te contatem."
  }, {
    question: "E se eu não tiver resultados em 30 dias?",
    answer: "Oferecemos garantia de resultados. Se não aumentarmos significativamente seu fluxo de leads qualificados em 30 dias, devolvemos 100% do investimento na nossa gestão."
  }, {
    question: "Vocês cuidam das redes sociais também?",
    answer: "Sim! Criamos conteúdo educativo para Instagram, Facebook e TikTok que posiciona sua clínica como autoridade e nutre leads gerados pelo tráfego pago."
  }];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Perguntas 
            <span className="text-purple-600"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e metodologia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`h-5 w-5 text-purple-600 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>)}
        </div>

        <div className="text-center mt-12">
          
          
        </div>
      </div>
    </section>;
};
export default FAQ;