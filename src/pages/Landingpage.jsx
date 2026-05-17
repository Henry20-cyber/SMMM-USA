import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About2';
import History from '../components/History';
import Mission from "../components/Mission";
import Sacredsymbols from '../components/Sacredsymbols';
import Superiors from '../components/Superiors';
import Donations from '../components/Donations';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
// Import other sections here later (About, Mission, etc.)

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
     
        <Hero />
        <About />
        <History />
        <Sacredsymbols />
        <Mission />
        <Superiors />
        <Donations />
        <Chatbot />

        {/* Add other components like <About /> here */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;