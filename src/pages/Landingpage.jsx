import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About2';
import Summary from '../components/Summary';
import Sacredsymbols from '../components/Sacredsymbols';
import Superiors from '../components/Superiors';
import Charism from '../components/Charism';
import Apostolate from '../components/Apostolate';
import MissionAreas from '../components/MissionAreas';
import Banner from '../components/Banner';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
import Links from '../components/LInks';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
// Import other sections here later (About, Mission, etc.)

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Intercept navigation safe state values passed from the header component
    if (location.state?.scrollToHash) {
      const hash = location.state.scrollToHash;
      const element = document.getElementById(hash);

      if (element) {
        // Trigger scrolling natively AFTER the DOM cycle has settled completely
        element.scrollIntoView({ behavior: 'smooth' });

        // Clean state parameters out so reloading won't trigger unwanted jumping jumps
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);
  return (
    <div className="bg-background">
      <Navbar />
      <main>

        <Hero />
        <div id='about'><About /></div>
        <div id='summary'><Summary /></div>
        <div id='sacredsymbols'><Sacredsymbols /></div>
        <div id='charism'><Charism /></div>
        <div id='apostolate'><Apostolate /></div>
        <div id='mission'><MissionAreas /></div>
        <div id='superiors'><Superiors /></div>
        <div id='donations'><Donations /></div>
        <Contact />
        <Chatbot />
         <Links />
        <Banner />
        {/* Add other components like <About /> here */}
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;