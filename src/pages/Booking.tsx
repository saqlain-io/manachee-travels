import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, CreditCard, User, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { TOURS } from '../constants';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState(TOURS[0]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: 1,
    date: '',
    specialRequests: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { id: 1, name: 'Select Journey', icon: <MapPin size={18} /> },
    { id: 2, name: 'Traveler Info', icon: <User size={18} /> },
    { id: 3, name: 'Payment', icon: <CreditCard size={18} /> },
    { id: 4, name: 'Confirmation', icon: <Check size={18} /> }
  ];

  return (
    <div className="pt-24 pb-24 bg-surface-container-low min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-outline-variant/20 -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary transition-all duration-500 -z-10"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step >= s.id ? 'bg-primary text-white scale-110' : 'bg-white text-on-surface-variant border border-outline-variant/20'
                }`}>
                  {step > s.id ? <Check size={20} /> : s.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest hidden md:block ${
                  step >= s.id ? 'text-primary' : 'text-on-surface-variant'
                }`}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/10 p-8 md:p-12 min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8 flex-grow"
                  >
                    <div className="space-y-2">
                      <h2 className="font-headline text-3xl font-bold text-primary">Choose Your Journey</h2>
                      <p className="text-on-surface-variant">Select the expedition you'd like to embark on.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {TOURS.map((tour) => (
                        <div 
                          key={tour.id}
                          onClick={() => setSelectedTour(tour)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-6 ${
                            selectedTour.id === tour.id ? 'border-primary bg-primary/5' : 'border-outline-variant/10 hover:border-primary/30'
                          }`}
                        >
                          <img src={tour.image} alt={tour.title} className="w-20 h-20 rounded-lg object-cover" />
                          <div className="flex-grow">
                            <h3 className="font-bold text-primary">{tour.title}</h3>
                            <p className="text-xs text-on-surface-variant">{tour.location} • {tour.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">${tour.price.toLocaleString()}</p>
                            <p className="text-[10px] uppercase font-bold text-secondary">Per Person</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8 flex-grow"
                  >
                    <div className="space-y-2">
                      <h2 className="font-headline text-3xl font-bold text-primary">Traveler Details</h2>
                      <p className="text-on-surface-variant">Tell us who is coming on this adventure.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">First Name</label>
                        <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="John" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Last Name</label>
                        <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Email Address</label>
                        <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Phone Number</label>
                        <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Preferred Date</label>
                        <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Number of Travelers</label>
                        <select className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none appearance-none">
                          {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} Traveler{n > 1 ? 's' : ''}</option>)}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8 flex-grow"
                  >
                    <div className="space-y-2">
                      <h2 className="font-headline text-3xl font-bold text-primary">Secure Payment</h2>
                      <p className="text-on-surface-variant">Complete your reservation with our secure checkout.</p>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 flex items-center gap-4">
                        <ShieldCheck className="text-primary" size={32} />
                        <div>
                          <p className="font-bold text-primary">Secure Transaction</p>
                          <p className="text-xs text-on-surface-variant">Your payment information is encrypted and never stored on our servers.</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Card Number</label>
                          <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Expiry Date</label>
                            <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="MM/YY" type="text" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">CVV</label>
                            <input className="w-full p-4 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="000" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8 flex-grow flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <Check size={48} />
                    </div>
                    <div className="space-y-4">
                      <h2 className="font-headline text-4xl font-bold text-primary">Reservation Confirmed!</h2>
                      <p className="text-on-surface-variant text-lg max-w-md mx-auto">
                        Thank you for choosing Manachee Travels. We've sent a confirmation email with your itinerary and next steps.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 w-full max-w-sm text-left space-y-4">
                      <div className="flex justify-between">
                        <span className="text-xs font-bold text-on-surface-variant uppercase">Booking ID</span>
                        <span className="font-bold text-primary">#MT-88291</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs font-bold text-on-surface-variant uppercase">Journey</span>
                        <span className="font-bold text-primary">{selectedTour.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs font-bold text-on-surface-variant uppercase">Date</span>
                        <span className="font-bold text-primary">June 12, 2024</span>
                      </div>
                    </div>
                    <Link to="/" className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition-all">
                      Return to Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {step < 4 && (
                <div className="mt-12 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`flex items-center gap-2 font-bold text-primary transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                  >
                    <ArrowLeft size={20} /> Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="bg-primary text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 transition-all active:scale-95"
                  >
                    {step === 3 ? 'Complete Booking' : 'Next Step'} <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/10 editorial-shadow sticky top-32 space-y-8">
              <h3 className="font-headline text-xl font-bold text-primary border-b border-outline-variant/10 pb-4">Booking Summary</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <img src={selectedTour.image} alt={selectedTour.title} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-primary text-sm leading-tight">{selectedTour.title}</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{selectedTour.location}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-outline-variant/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Base Price</span>
                    <span className="font-bold text-primary">${selectedTour.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Travelers</span>
                    <span className="font-bold text-primary">x {formData.travelers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Taxes & Fees</span>
                    <span className="font-bold text-primary">$240</span>
                  </div>
                  <div className="flex justify-between text-lg pt-4 border-t border-outline-variant/10">
                    <span className="font-headline font-bold text-primary">Total</span>
                    <span className="font-headline font-bold text-primary">${(selectedTour.price * formData.travelers + 240).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-4 rounded-xl space-y-3">
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <Calendar size={14} className="text-secondary" />
                  <span>Free cancellation up to 60 days</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <ShieldCheck size={14} className="text-secondary" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
