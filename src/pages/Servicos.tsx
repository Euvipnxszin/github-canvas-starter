
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import AIServicesSection from '@/components/AIServicesSection';

const Servicos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Soluções completas de marketing digital especializadas no setor pet care. 
            Cada serviço é personalizado para maximizar seus resultados.
          </p>
        </div>
      </header>

      {/* Serviços */}
      <ServicesSection />

      {/* Seção IA */}
      <AIServicesSection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio pet care.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
