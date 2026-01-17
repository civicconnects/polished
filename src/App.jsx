import Navbar from './components/Navbar';
import RedesignHero from './components/RedesignHero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App = () => {
  return (
    <div className="bg-[#0f0f0f] text-[#f0f0f0] min-h-screen selection:bg-[#d4af37] selection:text-white">
      <RedesignHero />
      <Marquee />
      <BentoGrid />
      <Lookbook />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
