import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

// 8 carefully curated high-quality images representing pastoral service, missions, and community light
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80", // Stained glass sanctuary
  "https://images.unsplash.com/photo-1548625361-155deee26575?auto=format&fit=crop&w=1600&q=80", // Chapel architecture interior
  "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?auto=format&fit=crop&w=1600&q=80", // Altar candle light
  "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&w=1600&q=80", // Cathedral vault architecture
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1600&q=80", // Holy Bible / Scripture study
  "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1600&q=80", // Sacred liturgical book
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80", // Fellowship community light
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=80"  // Peaceful church courtyard exterior
];

const REGIONAL_SUPERIORS = [
  { name: "Fr. Eugene Eburuche, SMMM", years: "1998-2009", isCurrent: false },
  { name: "Fr. Nelson Ogwuegbu (excardinated)", years: "2009-2010", isCurrent: false },
  { name: "Fr. Uche Iheke, SMMM", years: "2010-2012", isCurrent: false },
  { name: "Fr. John Agwu, SMMM", years: "2012-2015", isCurrent: false },
  { name: "Fr. Remigius Owoamanam, SMMM", years: "2015-2019", isCurrent: false },
  { name: "Fr. Marcellinus Ekenedo, SMMM", years: "2019-2021", isCurrent: false },
  { name: "Fr. Anselm Ugochukwu Ibe, SMMM", years: "2021-present", isCurrent: true }
];

export default function History() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automated fade carousel shifting every 10,000ms (10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen flex flex-col justify-between selection:bg-blue-500 selection:text-white antialiased font-sans">
      < Navbar />
      {/* Dynamic Fading Hero Section */}
      <section className="relative h-[380px] sm:h-[450px] bg-slate-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((imageUrl, index) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={`Pastoral environment backdrop visual frame ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter brightness-[0.35] scale-105 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Subtle gradient treatment layer to ease image edges into content */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-blue-400 mb-3 block">
            Sons of Mary Mother of Mercy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Brief Information about the SMMM American Region
          </h1>
          <div className="mt-5 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Structural Content Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Historical Context & Foundations */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-3">
              Our Foundation & History
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Sons of Mary Mother of Mercy (SMMM) is a Religious Congregation of priests and lay brothers founded by Most Rev. Anthony Gogo Nwedo, C.S.Sp, of blessed memory, on October 25, 1970. It is the first indigenous male religious order in West Africa. The founder was the pioneer bishop of Umuahia Diocese, a visionary leader who saw beyond his time. He had the vision that a time would come when the congregation would have its members on mission all over the world.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              While founding the congregation, his primary goal was to form a male religious order to support him in meeting the local needs of the Umuahia Diocese. Today, through the intercession of Mary, Mother of Mercy, the mission has spread to several parts of the globe, including Africa (Nigeria, Cameroon, Ghana, and Burkina Faso), North America (Canada and the United States of America), Europe (Germany, Luxembourg, Austria, Switzerland, United Kingdom, Italy, Belgium, and the Republic of Ireland), and the Republic of the Philippines.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Regarding the SMMM’s presence in the United States of America, the SMMM American Region began as a mustard seed and has since blossomed into a shrub with many branches. Specifically, it began on January 24, 1998, when Fr. Eugene Ujunwa Eburuche, SMMM, arrived in Indiana within the Diocese of Fort Wayne-South Bend. This occurred during the episcopate of Bishop John Michael D’Arcy—a good shepherd after the heart of Christ—who passed away on January 13, 2010.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Due to the growing need for the Sacraments, Bishop D’Arcy invited Fr. MacDonald Kelechi Nwandu, SMMM, to join Fr. Eburuche on March 2, 2001. Together, they formed the first community of two brothers in Fort Wayne. Their mission there concluded on July 12, 2005, when permission for a new Mission was granted. Fr. Nwandu left for theological studies in Germany, while Fr. Eburuche moved to the Diocese of Fresno, California, for chaplaincy services.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              The Fresno mission opened new opportunities for ministry and friendship. Bishop John Steinbock and then-Vicar General Monsignor Myron J. Cotta (now Bishop of Stockton) welcomed the Order with open hearts. In September 2005, Fr. Nelson Okechi Ogwuegbu joined Fr. Eburuche to form a new community in Fresno. By the end of 2006, the USA Region had grown rapidly to include 15 priests.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              With the steady growth of our membership, our Superior General, the Very Reverend Dr. James Michael Okpala-Onwuka, SMMM, formally elevated our community to the status of a region, and Fr. Eugene became our pioneer Regional Superior. Consequently, the structural arrangements for effective leadership were set in motion as SMMM’s presence continued to be visibly acknowledged and represented through the members’ apostolate in various dioceses and hospital chaplaincies across the country. Interestingly, the first regional elections were held on February 10, 2009, at St. Genevieve’s Catholic Parish in Fresno, California. Fr. Nelson Ogwuegbu was elected and later ratified as the first elected Regional Superior on March 30, 2009, alongside Fr. Anselm Ibe as Secretary and Fr. Bartholomew Ifionu as Bursar.
            </p>
          </div>
          
          {/* Right Column: Modern Landscape, Strength & Leadership Structure */}
          <div className="space-y-8">
            
            {/* Current Presence Metrics and Milestones */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-3">
                Current Status & Global Strength
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Currently, our members provide priestly ministry across various Archdioceses and Dioceses, including Fresno, CA; San Bernardino, CA; San Diego, CA; Boston, MA; Boise, ID; and Orlando, FL. Other members serve as Hospital, Veteran, and Prison Chaplains within the dioceses and archdioceses of Los Angeles, CA; San Francisco, CA; San Bernardino, CA; Syracuse, NY; Hartford, Connecticut; Miami, FL; St. Augustine, FL; and St. Petersburg, FL. Notably, our student members currently in the Philippines also belong to the USA Region.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                The numerical strength of our Region is a true blessing, with 35 active members. In thanksgiving for God’s love and mercy, we celebrated the Silver Jubilee of our mission in the United States in 2023. This milestone was a moment to appreciate our 25-year journey as missionaries dedicated to God’s work. Our Superior General, Rev. Fr. Dr. Christian Okwuru, joined us for this epoch-making celebration, during which awards for exceptional leadership and missionary services were presented to Fr. Eugene Eburuche, Fr. Paulinus Iwuji, and Fr. Anselm Ibe.
              </p>
              
              {/* Scripture Highlight Element */}
              <div className="border-l-4 border-blue-600 pl-4 py-2 bg-slate-50 rounded-r-xl">
                <p className="text-base italic font-medium text-slate-900 leading-relaxed">
                  Following the mandate of our Lord Jesus Christ, we have, therefore, resolved to bring the Gospel to all nations: &ldquo;Go and make disciples of all nations…&rdquo; (Mt 28:19).
                </p>
              </div>
            </div>
            
            {/* Regional Leadership Sequence Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-800 space-y-6">
              <h3 class="text-xl font-bold tracking-tight text-blue-400">
                Past and Present Regional Superiors
              </h3>
              
              {/* Timeline Sequence Mapping */}
              <div className="flex flex-col space-y-1 font-medium text-slate-200">
                {REGIONAL_SUPERIORS.map((superior, idx) => (
                  <div 
                    key={idx} 
                    className={`flex justify-between items-center py-3 border-slate-800 transition-colors ${
                      idx !== REGIONAL_SUPERIORS.length - 1 ? 'border-b' : ''
                    } ${superior.isCurrent ? 'text-white' : 'hover:text-white'}`}
                  >
                    <span className={superior.isCurrent ? "text-blue-400 font-semibold" : "font-normal"}>
                      {superior.name}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-normal ${
                      superior.isCurrent 
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-800/80' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {superior.years}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>
      
      {/* Standard Regional Footer Block */}
      <footer className="w-full text-center py-8 text-xs text-slate-400 border-t border-slate-200 bg-white">
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
      
    </div>
  );
}