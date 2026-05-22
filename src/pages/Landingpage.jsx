import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About2';
import History from '../components/History1';
import Sacredsymbols from '../components/Sacredsymbols';
import Superiors from '../components/Superiors';
import Charism from '../components/Charism';
import Apostolate from '../components/Apostolate';
import MissionAreas from '../components/MissionAreas';
import Banner from '../components/Banner';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
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
        <Charism />
        <Apostolate />
        <MissionAreas />
        <Superiors />
        <Donations />
        <Contact />
        <Chatbot />
         <Banner />

        {/* Add other components like <About /> here */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;