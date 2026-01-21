import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RedesignHero from './components/RedesignHero';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0f0f0f] text-[#f0f0f0] min-h-screen selection:bg-[#d4af37] selection:text-white">
        <Routes>
          <Route path="/" element={
            <>
              <RedesignHero />
              <Marquee />
              <BentoGrid />
              <Lookbook />
            </>
          } />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
