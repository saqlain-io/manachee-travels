import { motion } from 'motion/react';
import { ShieldCheck, Globe, Heart, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '12+' },
    { label: 'Destinations', value: '45+' },
    { label: 'Happy Travelers', value: '10k+' },
    { label: 'Expert Guides', value: '150+' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="text-secondary" size={32} />,
      title: 'Trust & Safety',
      description: 'Your safety is our top priority. We partner with vetted local operators and maintain 24/7 support for all our travelers.'
    },
    {
      icon: <Globe className="text-secondary" size={32} />,
      title: 'Sustainable Travel',
      description: 'We are committed to preserving the beauty of our planet. A portion of every booking goes towards local conservation projects.'
    },
    {
      icon: <Heart className="text-secondary" size={32} />,
      title: 'Personalized Care',
      description: 'No two travelers are the same. We curate bespoke experiences tailored to your unique interests and travel style.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          alt="About Us Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl md:text-7xl font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Crafting extraordinary journeys and unforgettable memories since 2012.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Our Mission</span>
            <h2 className="font-headline text-4xl font-bold text-primary leading-tight">
              Bridging the gap between traveler and destination through authentic experiences.
            </h2>
            <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Manachee Travels was born from a passion for exploration and a deep respect for the diverse cultures that make our world so vibrant. We believe that travel, when done right, is a powerful tool for personal growth and global understanding.
              </p>
              <p>
                Our team of travel designers spends months each year on the ground, scouting new locations, testing accommodations, and building relationships with local communities to ensure every journey we curate is exceptional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              alt="Team working" 
              className="rounded-2xl shadow-2xl relative z-10" 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-2xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Our Values</span>
            <h2 className="font-headline text-4xl font-bold text-primary mt-4">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm editorial-shadow space-y-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">The Experts</span>
            <h2 className="font-headline text-4xl font-bold text-primary mt-4">Meet Our Travel Designers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Elena Rodriguez', role: 'Founder & CEO', img: 'https://i.pravatar.cc/300?u=elena' },
              { name: 'Marcus Chen', role: 'Head of Adventure', img: 'https://i.pravatar.cc/300?u=marcus' },
              { name: 'Sarah Jenkins', role: 'Luxury Specialist', img: 'https://i.pravatar.cc/300?u=sarah' },
              { name: 'David Okafor', role: 'Cultural Liaison', img: 'https://i.pravatar.cc/300?u=david' },
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={member.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-headline text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
