import { Mail, Send, Globe, Share2, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto font-body text-sm">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-primary font-headline">Manachee Travels</div>
          <p className="text-on-surface-variant leading-relaxed">Curating extraordinary journeys across the globe since 2012. Every trip is a masterpiece.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Globe size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Share2 size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Video size={18} /></a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-bold text-primary uppercase tracking-[0.2em] text-[10px]">Company</h5>
          <ul className="space-y-3 text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" to="/about">Our Story</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/faq">Help Center & FAQ</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-bold text-primary uppercase tracking-[0.2em] text-[10px]">Destinations</h5>
          <ul className="space-y-3 text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" to="/destinations">Africa Tours</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/destinations">Asia Tours</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/destinations">Europe Tours</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/destinations">Americas Tours</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-bold text-primary uppercase tracking-[0.2em] text-[10px]">Newsletter</h5>
          <p className="text-on-surface-variant leading-relaxed">Get curated travel guides and exclusive offers delivered to your inbox.</p>
          <div className="flex">
            <input 
              className="w-full px-4 py-3 bg-white border border-outline-variant/20 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-primary text-sm" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="bg-primary text-white px-6 py-3 rounded-r-xl hover:brightness-110 transition-all flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs font-medium">
        <span>© 2026 Manachee Travels. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
}
