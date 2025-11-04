import React from 'react';
import { CONTACT_PHONE, CONTACT_WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_ADDRESS } from '../constants';

const ContactPage: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Namaste! I have a question about Shiva Shilp Kala.");
  const whatsappLink = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  // FIX: Replaced `JSX.Element` with `React.ReactElement` to resolve "Cannot find namespace 'JSX'" error.
  // This uses the type from the imported 'React' module directly.
  const InfoCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300 fade-in">
      <div className="flex-shrink-0 text-amber-600 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-stone-800 mb-1">{title}</h3>
        <div className="text-stone-600">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-2 fade-in">Get in Touch</h2>
        <p className="text-lg text-stone-600 fade-in" style={{ animationDelay: '0.3s' }}>We would love to hear from you.</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 fade-in" style={{ animationDelay: '0.6s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div style={{ animationDelay: '0.9s' }}>
          <InfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            title="Phone & WhatsApp"
          >
            <a href={`tel:${CONTACT_PHONE}`} className="hover:text-amber-600 transition-colors">{CONTACT_PHONE}</a><br />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Chat on WhatsApp</a>
          </InfoCard>
        </div>
        
        <div style={{ animationDelay: '1.1s' }}>
          <InfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="Email"
          >
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber-600 transition-colors break-all">{CONTACT_EMAIL}</a>
          </InfoCard>
        </div>

        <div className="md:col-span-2" style={{ animationDelay: '1.3s' }}>
           <InfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            title="Workshop Location"
          >
            <p>{CONTACT_ADDRESS}</p>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;