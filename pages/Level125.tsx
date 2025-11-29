import React from 'react';
import { bikeData } from '../data';
import { Fuel, Gauge, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Level125: React.FC = () => {
  const bikes125 = bikeData.filter(b => b.cc === '125cc');

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Hero 125cc Bike Price in Bangladesh | Glamour, Ignitor, Xtreme"
        description="Check the latest prices for Hero 125cc bikes in Bangladesh. Compare Hero Glamour, Ignitor 125, and Xtreme 125R specs, mileage, and features."
        keywords="hero 125cc bike price in bangladesh, hero glamour price bd, hero ignitor price bd, hero xtreme 125r price bd"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center md:text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-hero-red text-xs font-bold uppercase tracking-widest mb-4">Popular Segment</span>
            {/* SEO Optimized H1 */}
            <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-tight mb-4">
                Hero 125cc Bike Price in Bangladesh
            </h1>
            <p className="mt-4 text-xl text-slate-500 font-light max-w-3xl">
                Compare the latest rates for Hero 125cc bikes including Glamour XTEC, Ignitor, and the new Xtreme 125R.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes125.map((bike) => (
            <div key={bike.id} className="group bg-white rounded-[2rem] shadow-soft hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
              <div className="relative h-64 overflow-hidden bg-slate-50 p-4">
                <img className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" src={bike.image} alt={`Hero ${bike.name} 125cc price in bd`} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-hero-red text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Top Choice
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{bike.cc} Category</p>
                    <h2 className="text-2xl font-display font-bold text-slate-900">{bike.name}</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <Fuel size={20} className="text-blue-500 mb-2 mx-auto" />
                    <span className="block text-xs text-slate-400 font-bold uppercase">Mileage</span>
                    <span className="block font-bold text-slate-900">{bike.mileage}</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                    <Gauge size={20} className="text-green-500 mb-2 mx-auto" />
                    <span className="block text-xs text-slate-400 font-bold uppercase">Power</span>
                    <span className="block font-bold text-slate-900">10.7 BHP</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Current Price</p>
                    <p className="text-3xl font-display font-black text-slate-900">{bike.price2024.replace('৳', '')}<span className="text-lg text-slate-500 font-sans font-medium">৳</span></p>
                  </div>
                  <button className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-hero-red shadow-lg transition-all duration-300">
                    <Zap size={20} className="fill-current" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level125;