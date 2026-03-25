import { Clock, Star, ArrowRight } from 'lucide-react';
import { Tour } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export interface TourCardProps {
  tour: Tour;
  key?: string | number;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 flex flex-col h-full"
    >
      <Link to={`/tours/${tour.id}`} className="relative aspect-[4/5] overflow-hidden block">
        <img 
          alt={tour.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
          src={tour.image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white font-bold flex items-center gap-2">
            View Details <ArrowRight size={18} />
          </span>
        </div>
        {tour.featured && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            Featured
          </div>
        )}
        {tour.bestseller && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            Bestseller
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-1 leading-tight">
              {tour.title}
            </h3>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">{tour.location}</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block">From</span>
            <p className="text-2xl font-bold text-primary leading-none">${tour.price.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-6">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock size={16} className="text-secondary" /> {tour.duration}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Star size={16} className="text-secondary" fill="currentColor" /> {tour.rating}
          </span>
        </div>

        <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between gap-4">
          <Link 
            to={`/tours/${tour.id}`}
            className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Details
          </Link>
          <Link 
            to="/booking"
            className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
