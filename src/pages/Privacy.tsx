import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      title: "Data Collection",
      icon: <Eye className="text-secondary" size={24} />,
      content: "We collect information you provide directly to us, such as when you create an account, book a tour, or contact us for support. This may include your name, email address, phone number, and payment information."
    },
    {
      title: "Data Usage",
      icon: <FileText className="text-secondary" size={24} />,
      content: "We use the information we collect to provide, maintain, and improve our services, to process your bookings, and to communicate with you about your travel plans and our latest offerings."
    },
    {
      title: "Data Security",
      icon: <Lock className="text-secondary" size={24} />,
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. Your payment information is always encrypted."
    },
    {
      title: "Data Sharing",
      icon: <ShieldCheck className="text-secondary" size={24} />,
      content: "We do not share your personal information with third parties except as described in this policy, such as with our local travel partners to facilitate your bookings or as required by law."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-surface-container-low min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase">Legal Center</span>
          <h1 className="font-headline text-5xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-outline-variant/10 editorial-shadow space-y-12">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">Introduction</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Manachee Travels ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary">{section.title}</h3>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-outline-variant/10 space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Your Choices</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-on-surface-variant">You may opt out of receiving promotional emails from us by following the instructions in those emails.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-on-surface-variant">You can access, update, or delete your personal information by contacting us directly.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-on-surface-variant">Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-outline-variant/10 text-center">
            <p className="text-on-surface-variant">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-xl font-bold text-primary mt-2">privacy@manacheetravels.com</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-4">Last Updated: March 25, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
