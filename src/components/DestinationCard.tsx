import { ArrowRight } from 'lucide-react';
import { Destination } from '../types';

export interface DestinationCardProps {
  destination: Destination;
  large?: boolean;
  key?: string | number;
}

export default function DestinationCard({ destination, large }: DestinationCardProps) {
  const colSpan = large ? 'lg:col-span-8 sm:col-span-2' : 'lg:col-span-4 sm:col-span-1';
  const height = large ? 'h-[500px] md:h-[600px]' : 'h-[400px] md:h-[450px]';

  return (
    <div className={`${colSpan} ${height} group relative overflow-hidden rounded-2xl editorial-shadow cursor-pointer border border-outline-variant/10`}>
      <img 
        alt={destination.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        src={destination.image}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
        <span className="font-body text-[10px] tracking-[0.2em] text-secondary font-bold mb-2 block uppercase">
          {destination.region}
        </span>
        <h2 className={`font-headline ${large ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} text-white font-bold mb-4 leading-tight`}>
          {destination.name}
        </h2>
        
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-in-out">
          <p className="text-white/80 mb-6 max-w-xl text-sm md:text-base leading-relaxed">
            {destination.description}
          </p>
          <div className="inline-flex items-center text-white font-bold text-sm gap-2 group/btn">
            Explore Tours 
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-secondary transition-colors">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
