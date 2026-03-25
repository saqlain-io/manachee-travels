import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageSquare, Phone, Mail } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is included in the tour price?",
      answer: "Our signature journeys typically include luxury accommodation, all internal flights and transfers, expert private guides, and most meals and premium beverages. International airfare, visa fees, and travel insurance are usually not included unless specified."
    },
    {
      question: "How do I book a custom itinerary?",
      answer: "We specialize in bespoke travel. You can start by filling out our custom trip request form on the Contact page, or by calling one of our travel designers directly. We'll work with you to craft a journey tailored to your specific interests and pace."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer free cancellation up to 60 days before your departure date. For cancellations within 60 days, fees may apply depending on the specific tour and our local partners' policies. We highly recommend purchasing comprehensive travel insurance."
    },
    {
      question: "Are your tours suitable for solo travelers?",
      answer: "Absolutely! Many of our guests travel solo. We can arrange for private guides and single-occupancy accommodations, or match you with other solo travelers on our group expeditions if you prefer."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "While we don't provide insurance directly, we strongly recommend it and can provide guidance on reputable providers. Comprehensive travel insurance should cover medical emergencies, trip cancellations, and lost luggage."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-surface-container-low min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Support Center</span>
          <h1 className="font-headline text-5xl font-bold text-primary">Frequently Asked Questions</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our curated journeys, booking process, and travel policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors"
              >
                <h3 className={`font-headline text-xl font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-on-surface'}`}>
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-surface-container text-primary'
                }`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-on-surface-variant leading-relaxed text-lg border-t border-outline-variant/5 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center text-white space-y-8 editorial-shadow">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={40} className="text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold">Still have questions?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Our travel designers are available to help you with any specific inquiries or custom requests.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a href="tel:+15551234567" className="flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all">
              <Phone size={20} /> Call Us
            </a>
            <a href="mailto:hello@manacheetravels.com" className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              <Mail size={20} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
