import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitBand from './components/BenefitBand';
import MotionSection from './components/MotionSection';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingShopButton from './components/FloatingShopButton';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-brand-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BenefitBand />
        <MotionSection />
        <ProductShowcase />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingShopButton />
      <ChatWidget />
    </div>
  );
}

export default App;
