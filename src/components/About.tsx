
import { getAssetPath } from '@/lib/assets';

const About = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img alt="Fundador da Meltro Agency" className="w-80 h-80 mx-auto rounded-full object-cover shadow-2xl" src={getAssetPath("/lovable-uploads/0082c4d5-8313-4c74-961b-018d432117e6.png")} />
            </div>
            
            <div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Por Que Criei a 
                <span className="text-purple-600"> Meltro</span>
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  "Somos uma agência feita sob medida para o setor pet. Nosso foco é simples: atrair mais clientes qualificados, aumentar o faturamento e defender o território dos negócios pet com serviços que vão do tráfego pago ao funil de vendas, passando por copy de ataque, sites com presença de matilha e automações que trabalham 24/7."
                </p>
                
                <p>
                  "A gente entende que no mundo pet, o cuidado vem em primeiro lugar — e é exatamente assim que tratamos o marketing dos nossos clientes. Com respeito, visão, estratégia e um toque de ousadia."
                </p>

                <p>
                  "Nosso compromisso é com quem ama o que faz, já tem história e quer crescer ainda mais, sem virar refém de franquias ou depender só de indicação."
                </p>
                
                <p className="font-semibold text-purple-600">
                  "Se o seu negócio já é incrível, nosso trabalho é fazer todo mundo saber disso."
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Minha Missão</h3>
                <p className="text-gray-700">
                  Transformar cada negócio pet care em uma referência local, gerando impacto real na vida dos pets e retorno garantido para os proprietários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
