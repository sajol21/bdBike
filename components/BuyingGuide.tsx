import React from 'react';
import { BookOpen, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const BuyingGuide: React.FC = () => {
  return (
    <section id="guide" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <BookOpen className="text-blue-600" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6">
            The Ultimate <span className="text-blue-600">Buying Guide</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            Updated for 2025-26. Everything you need to know about purchasing a Hero bike.
          </p>
        </div>

        <div className="space-y-12">
          {/* Article 1: Price Trends */}
          <article className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <TrendingUp className="text-hero-red" />
              Hero Bike Price in Bangladesh 2025-26 Outlook
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              As we approach the end of 2025, the market has seen the launch of premium models like the Karizma XMR. 
              Buyers searching for <strong>"hero bike price in bangladesh 2025"</strong> should note that showroom prices have stabilized after the mid-year budget adjustments.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For 2026, analysts predict a steady trend. Hero MotoCorp's localization in Bangladesh continues to keep prices for 
              <strong> commuter models</strong> (Splendor, Glamour) significantly lower than competitors.
            </p>
          </article>

          {/* Article 2: 125cc Segment */}
          <article className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Why 125cc is the Sweet Spot
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The query <strong>"hero 125cc bike price in bangladesh"</strong> remains trending. 
                  With the new Xtreme 125R entering the chat, this segment now bridges the gap between daily commuting and sporty performance.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Bikes like the <strong>Hero Glamour XTEC</strong> offer Bluetooth connectivity and turn-by-turn navigation, features previously limited to 160cc bikes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Fuel Efficiency</h4>
                    <p className="text-xs text-slate-500">Expect 55-65 kmpl in city conditions.</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Resale Value</h4>
                    <p className="text-xs text-slate-500">Hero 125cc bikes retain 60-70% value after 3 years.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Article 3: Registration Costs */}
          <article className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="text-yellow-500" />
              Registration Costs (Updated Nov '25)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When calculating the <strong>hero new bike price in bangladesh</strong>, factor in the latest BRTA fees. 
              For 151cc+ bikes (like Karizma), registration costs are higher. 
              Currently, for standard 100cc-150cc bikes, the 2-year registration cost is approx <strong>৳14,500</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-sm">
              <strong>Pro Tip:</strong> Most Hero showrooms offer a "Ready to Ride" package. Ensure you clarify if the price includes the 10-year registration option (approx ৳24,000).
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BuyingGuide;