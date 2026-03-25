import { useParams, Link } from 'react-router-dom';
import { TOURS } from '../constants';
import { Clock, Users, Mountain, Star, Check, X, ArrowRight, Share2, Heart, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function TourDetail() {
  const { id } = useParams();
  const tour = TOURS.find(t => t.id === id) || TOURS[0];

  const itinerary = [
    { day: 'Day 1-3', title: 'Arrival & The Great Rift Valley', description: 'Arrive in Nairobi and transfer to your luxury lodge. Begin your journey with a scenic drive to the Great Rift Valley, witnessing the dramatic landscapes and initial wildlife encounters.' },
    { day: 'Day 4-7', title: 'Heart of the Serengeti', description: 'Fly into the Serengeti. Spend four days tracking the Great Migration. Experience sunrise balloon safaris and private sundowners in the bush.' },
    { day: 'Day 8-10', title: 'Ngorongoro Crater Exploration', description: 'Descend into the "Eden of Africa." This self-contained ecosystem offers some of the densest wildlife viewing on the planet, including the rare black rhino.' },
    { day: 'Day 11-12', title: 'Maasai Cultural Immersion & Departure', description: 'Visit a traditional Maasai village to learn about ancient customs and sustainable living. Enjoy a final farewell dinner before your flight home.' }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[600px] flex items-end">
        <img 
          alt={tour.title} 
          className="absolute inset-0 w-full h-full object-cover" 
          src={tour.image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
          <div className="flex items-center gap-2 text-secondary-container font-bold tracking-widest uppercase text-sm mb-4">
            <MapPin size={16} /> {tour.location}
          </div>
          <h1 className="font-headline text-5xl md:text-7xl text-white font-bold max-w-4xl leading-tight">
            {tour.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-16">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-outline-variant/20">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} /> Duration
              </span>
              <p className="text-lg md:text-xl font-bold text-primary">{tour.duration}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Users size={14} /> Max Travelers
              </span>
              <p className="text-lg md:text-xl font-bold text-primary">8 People</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Mountain size={14} /> Difficulty
              </span>
              <p className="text-lg md:text-xl font-bold text-primary">Moderate</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Star size={14} className="text-secondary" /> Rating
              </span>
              <p className="text-lg md:text-xl font-bold text-primary">{tour.rating} ({tour.reviews})</p>
            </div>
          </div>

          {/* Overview */}
          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Overview</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {tour.description} This curated expedition takes you into the heart of the wild, offering an unparalleled look at nature's most spectacular events. Our expert guides ensure you're in the right place at the right time, while our luxury mobile camps provide a seamless blend of comfort and immersion.
            </p>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-10">The Journey</h2>
            <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/20">
              {itinerary.map((item, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold z-10">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2 block">{item.day}</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Included / Not Included */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl">
              <h3 className="font-headline text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Check className="text-green-600" size={20} /> What's Included
              </h3>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base">
                <li className="flex items-start gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> Luxury accommodation throughout</li>
                <li className="flex items-start gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> All internal flights and transfers</li>
                <li className="flex items-start gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> Expert private guides</li>
                <li className="flex items-start gap-3"><Check size={16} className="mt-1 flex-shrink-0" /> All meals and premium beverages</li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl">
              <h3 className="font-headline text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <X className="text-red-600" size={20} /> Not Included
              </h3>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base">
                <li className="flex items-start gap-3"><X size={16} className="mt-1 flex-shrink-0" /> International airfare</li>
                <li className="flex items-start gap-3"><X size={16} className="mt-1 flex-shrink-0" /> Visa fees and travel insurance</li>
                <li className="flex items-start gap-3"><X size={16} className="mt-1 flex-shrink-0" /> Personal expenses and gratuities</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar / Booking */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-outline-variant/10 editorial-shadow">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">Starting from</span>
                  <p className="text-4xl font-bold text-primary">${tour.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Per Person</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Select Date</label>
                  <select className="w-full p-4 bg-surface border border-outline-variant/20 rounded-xl font-semibold text-primary focus:ring-2 focus:ring-primary outline-none">
                    <option>June 12 - June 24, 2024</option>
                    <option>July 05 - July 17, 2024</option>
                    <option>August 18 - August 30, 2024</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Travelers</label>
                  <div className="flex items-center justify-between p-4 bg-surface border border-outline-variant/20 rounded-xl">
                    <button className="w-8 h-8 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">-</button>
                    <span className="font-bold text-primary">2 Adults</span>
                    <button className="w-8 h-8 rounded-full bg-white border border-outline-variant/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">+</button>
                  </div>
                </div>
              </div>

              <Link 
                to="/booking"
                className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3 mb-4"
              >
                Reserve Your Spot <ArrowRight size={20} />
              </Link>
              <p className="text-center text-[10px] text-on-surface-variant">No payment required today. Free cancellation up to 60 days before departure.</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-outline-variant/30 font-bold text-primary hover:bg-surface-container transition-colors">
                <Share2 size={18} /> Share
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-outline-variant/30 font-bold text-primary hover:bg-surface-container transition-colors">
                <Heart size={18} /> Save
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Sticky Booking Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-outline-variant/20 p-4 z-40 flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <div>
            <p className="text-2xl font-bold text-primary">${tour.price.toLocaleString()}</p>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Per Person</p>
          </div>
          <Link 
            to="/booking"
            className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-sm hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
