import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-secondary" size={24} />,
      title: 'Email Us',
      value: 'hello@manacheetravels.com',
      description: 'Our team will respond within 24 hours.'
    },
    {
      icon: <Phone className="text-secondary" size={24} />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9am - 6pm EST.'
    },
    {
      icon: <MapPin className="text-secondary" size={24} />,
      title: 'Visit Us',
      value: '123 Adventure Lane, Suite 100',
      description: 'New York, NY 10001, USA'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          alt="Contact Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-7xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Have questions about a journey? We're here to help you plan your next adventure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Send a Message</span>
              <h2 className="font-headline text-4xl font-bold text-primary">How can we help?</h2>
              <p className="text-on-surface-variant text-lg">
                Fill out the form below and one of our travel designers will get back to you shortly.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Booking Question</option>
                  <option>Custom Trip Request</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your travel plans..."
                  className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3 w-full md:w-auto">
                  Send Message <Send size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-10 rounded-2xl space-y-10 border border-outline-variant/10 editorial-shadow">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-outline-variant/10 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline text-xl font-bold text-primary">{info.title}</h3>
                    <p className="text-lg font-bold text-secondary">{info.value}</p>
                    <p className="text-sm text-on-surface-variant">{info.description}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-outline-variant/20 space-y-6">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <Clock size={20} className="text-secondary" />
                  <div>
                    <p className="font-bold text-primary">Office Hours</p>
                    <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-sm">Sat - Sun: Closed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <MessageSquare size={20} className="text-secondary" />
                  <div>
                    <p className="font-bold text-primary">Live Chat</p>
                    <p className="text-sm">Available during office hours for quick questions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 bg-slate-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-bold uppercase tracking-widest text-xs">
                Map View
              </div>
              <img 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale" 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
