import React from 'react';
import BuyingGuide from '../components/BuyingGuide';
import KnowledgeBase from '../components/KnowledgeBase';
import SEO from '../components/SEO';
import { HelpCircle, ChevronDown } from 'lucide-react';

const GuidePage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Bike Buying Guide & Maintenance Tips | bdBike"
        description="Expert advice on choosing the right Hero bike size, maintenance tips for chain and engine, and answers to common biking questions in Bangladesh."
        keywords="bike maintenance tips bd, how to choose bike size, bike abs guide, hero bike faq bangladesh"
      />
      <BuyingGuide />
      <KnowledgeBase />
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
                <div className="w-12 h-12 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-600">
                <HelpCircle size={24} />
                </div>
                <h2 className="text-4xl font-display font-black text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-500 mt-4 text-xl font-light">Common queries about Hero bike price in Bangladesh</p>
            </div>
            
            <div className="space-y-6">
            {[
                { q: "What is the Hero new bike price in Bangladesh for 125cc?", a: "The Hero new bike price for 125cc models like Glamour and Ignitor ranges between ৳1,30,000 to ৳1,45,000 in 2024, depending on the dealer and offers." },
                { q: "Will Hero bike prices increase in 2025?", a: "Market analysts predict a slight increase in Hero bike price in Bangladesh 2025 due to fluctuating currency rates and raw material costs, likely around 5-8%." },
                { q: "Which is the best Hero bike for mileage?", a: "The Hero Splendor+ is the undisputed mileage king in Bangladesh, consistently offering 60-70 kmpl, making it the best commuter option." }
            ].map((faq, i) => (
                <div key={i} className="group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all cursor-default">
                    <div className="flex items-start justify-between gap-4">
                            <h3 className="font-bold text-lg text-slate-900 leading-snug">{faq.q}</h3>
                            <ChevronDown className="flex-shrink-0 text-slate-300 group-hover:text-hero-red transition-colors" size={24} />
                    </div>
                    <p className="text-slate-600 leading-relaxed mt-4 border-t border-slate-100 pt-4">{faq.a}</p>
                </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;