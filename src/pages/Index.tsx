
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import MarketingFrustrations from '@/components/MarketingFrustrations';
import Solutions from '@/components/Solutions';
import CasesSection from '@/components/CasesSection';
import About from '@/components/About';
import Reviews from '@/components/Reviews';

import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AIWidget from '@/components/AIWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <Problems />
      <MarketingFrustrations />
      <Solutions />
      <CasesSection />
      <About />
      <Reviews />
      <CTA />
      <Footer />
      <AIWidget />
    </div>
  );
};

export default Index;
