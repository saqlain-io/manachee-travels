import { Search, Calendar, Compass, ShieldCheck, Verified, CreditCard, Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TOURS, TESTIMONIALS } from '../constants';
import TourCard from '../components/TourCard';

export default function Home() {
  const featuredTours = TOURS.filter(t => t.featured);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-[921px] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Serene Tropical Beach" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAhIcfqmOx7fcqH_u6m_E-adh3Apf-TyulEJFPuwaS_kUwFJDtK59O_s_wWI8Ip008GwpOkut3SvVs2kfx7D8KoAugJF5NNWM5hSNPrEQd8bXex7qmEUWWNz-zJAzEVYf7Uc4EnL9HzRjVxtmzMCoFz2VKLt69_MVgwljEeuvaIdqeQHrPFiM8F_MLBMwNsIThKshmn1vPuwvqApa59JcKVKfrCTEUBVFYVqklCLM9kKn4rv1ivxqz5mWHFL3p68WKVM14gQjp7lY"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
              The Art of Exploration
            </span>
            <h1 className="font-headline text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 max-w-4xl mx-auto">
              Discover Your <span className="italic font-normal serif">Next</span> Adventure
            </h1>
          </motion.div>
          
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-6 max-w-5xl mx-auto items-end border border-white/20"
            >
              <div className="flex-1 w-full text-left">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 px-1">Destination</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50" size={16} />
                  <input className="w-full pl-10 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface text-sm" placeholder="Where to?" type="text"/>
                </div>
              </div>
              <div className="flex-1 w-full text-left">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 px-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50" size={16} />
                  <input className="w-full pl-10 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface text-sm" type="date"/>
                </div>
              </div>
              <div className="flex-1 w-full text-left">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 px-1">Tour Type</label>
                <div className="relative">
                  <Compass className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50" size={16} />
                  <select className="w-full pl-10 pr-4 py-3 bg-surface border-none rounded-xl focus:ring-2 focus:ring-primary text-on-surface appearance-none text-sm">
                    <option>Adventure</option>
                    <option>Luxury</option>
                    <option>Cultural</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
              <Link 
                to="/tours"
                className="bg-secondary text-white px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 w-full md:w-auto text-sm"
              >
                <Search size={18} />
                Search
              </Link>
            </motion.div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Curated Collections</span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 font-bold text-primary">Signature Journeys</h2>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 px-8 no-scrollbar scroll-smooth">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="min-w-[320px] md:min-w-[450px]">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/tours"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all active:scale-95"
          >
            Browse All Tours
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center">
              <Verified className="text-white" size={32} />
            </div>
            <h4 className="font-headline text-2xl font-bold text-primary">Experienced Guides</h4>
            <p className="text-on-surface-variant leading-relaxed">Our experts don't just know the map; they know the soul of the destination. Every guide is vetted for deep local knowledge.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h4 className="font-headline text-2xl font-bold text-primary">Safe & Secure</h4>
            <p className="text-on-surface-variant leading-relaxed">Your peace of mind is our priority. From 24/7 support to secure payment processing, we handle the logistics with care.</p>
          </div>
          <div className="space-y-6">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center">
              <CreditCard className="text-white" size={32} />
            </div>
            <h4 className="font-headline text-2xl font-bold text-primary">Best Price Guarantee</h4>
            <p className="text-on-surface-variant leading-relaxed">Luxury shouldn't be overpriced. We work directly with local partners to ensure you get the best value for your investment.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Global Perspectives</span>
            <h2 className="font-headline text-4xl md:text-5xl mt-4 font-bold text-primary">Voices from the Path</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-12 rounded-2xl shadow-sm relative editorial-shadow">
                <Quote className="text-primary-container absolute -top-4 -left-4 opacity-30" size={64} />
                <div className="flex gap-1 mb-6 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl font-headline italic leading-relaxed text-on-surface mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt={t.name} className="w-full h-full object-cover" src={t.avatar} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative z-10 shadow-2xl">
              <img 
                alt="About Manachee Travels" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSgoPSwPQJ6tYVM8ozYefnQbj5FNE75N-yVPgQYGpM6aI-95YJ3stFdYvHxy66pga_7FVp0LF-tKaGUvZ4lscUAsLjhVWJGRz2mqyaG-l4MddI-LZ3xA9o_pwDN7nrCcN5iipixff5RTVKy0Uerdd_f4x436M1ySUc8t7AT8qT2Zn4cQrap1WqPRdm3Vz-VfueNRVmPzclPlhlpblF9rucdwzRCPvg8k_VdsLieCCjnnIjIfvUWoGqmSEF0-9vchwe4WZgNcF2Z28"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-xl -z-0"></div>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Our Story</span>
            <h2 className="font-headline text-4xl font-bold text-primary mt-4 mb-8">About Manachee Travels</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>Manachee Travels was founded on the belief that travel is the ultimate form of education. We don't just provide tours; we curate deeply personal experiences that bridge the gap between traveler and destination.</p>
              <p>Specializing in luxury, adventure, and bespoke cultural journeys, we pride ourselves on a "white-glove" approach to travel planning. From the moment you inquire about a destination to the moment you return home, every detail is managed with precision and care.</p>
              <p>Join us as we explore the far reaches of the globe, supporting local communities and preserving the natural beauty of our planet through sustainable travel practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
