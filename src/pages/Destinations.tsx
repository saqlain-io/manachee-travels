import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../constants';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  const categories = ['All', 'Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

  return (
    <main className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <div className="max-w-3xl">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary font-extrabold mb-4 block">Our Curation</span>
          <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold leading-tight mb-8">
            Where would you <br/><span className="italic font-normal">like to go?</span>
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 mt-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                cat === 'All' ? 'bg-primary text-white' : 'bg-white text-on-surface-variant hover:bg-surface-container-high editorial-shadow'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {DESTINATIONS.map((dest, index) => (
            <DestinationCard 
              key={dest.id} 
              destination={dest} 
              large={index === 0} 
            />
          ))}
        </div>
      </section>

      <section className="mt-32 max-w-7xl mx-auto px-8">
        <div className="bg-primary-container rounded-xl p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl text-white font-bold mb-4">Keep the world at your fingertips.</h2>
            <p className="text-white/80 text-lg">Join our exclusive newsletter for curated travel stories and first access to seasonal tours.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input className="bg-white border-none rounded px-6 py-4 w-full md:w-80 text-on-surface focus:ring-2 focus:ring-secondary" placeholder="Your email address" type="email"/>
              <button className="bg-secondary text-white px-10 py-4 rounded font-bold hover:opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full -ml-10 -mb-10"></div>
        </div>
      </section>
    </main>
  );
}
