import { Search, ArrowLeft, ArrowRight, Star, SlidersHorizontal, X } from 'lucide-react';
import { TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Tours() {
  const [priceRange, setPriceRange] = useState(15000);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showFilters]);

  const SidebarContent = () => (
    <div className="space-y-10">
      <div className="space-y-3">
        <label className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase block">Search Tours</label>
        <div className="relative">
          <input className="w-full bg-white border-none outline outline-1 outline-outline-variant/15 focus:ring-1 focus:ring-primary rounded-xl py-3 pl-10 text-sm" placeholder="Where to next?" type="text"/>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={18} />
        </div>
      </div>
      
      <div className="space-y-4">
        <label className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase block">Experience Type</label>
        <div className="space-y-3">
          {['Adventure', 'Family', 'Luxury', 'Solo'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" defaultChecked={type === 'Luxury'} />
              <span className={`text-sm transition-colors ${type === 'Luxury' ? 'text-primary font-semibold' : 'text-on-surface-variant group-hover:text-primary'}`}>{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <label className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase block">Duration</label>
        <div className="space-y-3">
          {['1-3 Days', '4-7 Days', '7+ Days'].map((dur) => (
            <label key={dur} className="flex items-center gap-3 cursor-pointer group">
              <input className="w-5 h-5 border-outline-variant text-primary focus:ring-primary" name="duration" type="radio" defaultChecked={dur === '7+ Days'} />
              <span className={`text-sm transition-colors ${dur === '7+ Days' ? 'text-primary font-semibold' : 'text-on-surface-variant group-hover:text-primary'}`}>{dur}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <label className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">Price Range</label>
          <span className="text-xs font-medium text-primary">$2k - ${Math.round(priceRange / 1000)}k</span>
        </div>
        <input 
          className="w-full h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" 
          type="range" 
          min="2000" 
          max="20000" 
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
        />
      </div>
      <button className="w-full bg-primary text-white py-4 rounded-xl font-bold lg:hidden" onClick={() => setShowFilters(false)}>
        Apply Filters
      </button>
    </div>
  );

  return (
    <main className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-8">
      <header className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight font-headline">Curated Expeditions</h1>
        <p className="text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed">
          Discover our hand-picked selection of global adventures, from the peaks of the Alps to the sun-drenched shores of the Amalfi Coast. Each journey is an editorial masterpiece in travel.
        </p>
      </header>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white rounded-2xl border border-outline-variant/10 shadow-sm">
          <span className="text-sm font-bold text-primary">{TOURS.length} Journeys Found</span>
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-xs"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-32">
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {showFilters && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFilters(false)}
                className="fixed inset-0 bg-black/40 z-[60] lg:hidden"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[70] lg:hidden p-8 shadow-2xl overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-10">
                  <h2 className="font-headline text-2xl font-bold text-primary">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="text-primary">
                    <X size={24} />
                  </button>
                </div>
                <SidebarContent />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Area */}
        <section className="flex-grow">
          <div className="hidden md:flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-outline-variant/15 gap-4">
            <span className="text-sm text-on-surface-variant">Showing <span className="font-bold text-on-surface">{TOURS.length}</span> of 48 curated journeys</span>
            <div className="flex items-center gap-4">
              <label className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Sort By</label>
              <select className="bg-transparent border-none text-sm font-semibold text-primary focus:ring-0 cursor-pointer">
                <option>Featured</option>
                <option>Price (Low to High)</option>
                <option>Duration</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <nav className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <ArrowLeft size={20} />
            </button>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Page 01 of 04</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <ArrowRight size={20} />
            </button>
          </nav>
        </section>
      </div>
    </main>
  );
}
